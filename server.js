let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/basic_mongoose');

let TasksSchema = new mongoose.Schema({
    title: {type: String, default: ""},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
})

mongoose.model('Task', TasksSchema);
let Task = mongoose.model('Task');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(express.static(__dirname + '/angularTask1/dist'));

// app.get('/', function(req, res) {
//     console.log('in / GET route');
//     console.log('redirecting to /tasks GET route');
//     res.redirect('/tasks')
// })

// Get all tasks
app.get('/tasks', function(req, res) {
    console.log('in /tasks GET route');

    Task.find({}, function(err, all_tasks) {
        if (err) {
            console.log('error finding all tasks');
            res.json({error: err})
        } else {
            console.log('successfully found all tasks');
            res.json({tasks: all_tasks})
        }
    })
});

app.get('/tasks/:id', function(req, res) {
    console.log('in /tasks/' + req.params.id + ' GET route');

    Task.find({_id: req.params.id}, function(err, task) {
        if (err) {
            console.log('error searching for this task');
            res.json({error: err});
        } else {
            console.log('successfully searched for this task where id is: ', req.params.id);
            res.json({task: task});
        }
    })
})

// Create new Task
app.post('/tasks', function(req, res) {
    console.log('in /tasks POST route');
    console.log('POST DATA is: ', req.body);

    let new_task = new Task(req.body);
    new_task.save(function(err) {
        if (err) {
            console.log('error saving new task');
            res.json({error: err});
        } else {
            console.log('successfully saved new task');
            console.log('new task is: ', new_task);
            console.log('redirecting to /tasks')
            res.redirect('/tasks')
        }
    })
})

app.put('/tasks/:id', function(req, res) {
    console.log('in /tasks/' + req.params.id + ' PUT route');

    Task.find({_id: req.params.id}, function(err, task) {
        if (err) {
            console.log('error finding this task');
        } else {
            console.log('successfully found this task, starting changes');
            
            console.log('req.params is: ', req.params)
            console.log('req.params.title is: ', req.params.title)

            task[0].title = req.body.title;
            task[0].description = req.body.description;
            task[0].completed = req.body.completed;
            task[0].updated_at = Date.now();
            
            task[0].save(function(err) {
                if (err) {
                    console.log('error updating task');
                    res.json({error: err});
                } else {
                    console.log('successfully saved updated task');
                    res.json({message: "success", data: task})
                }
            })

        }
    })
})

app.delete('/tasks/:id', function(req, res) {
    console.log('in tasks/' + req.params.id + ' DELETE route');

    Task.remove({_id: req.params.id}, function(err) {
        if (err) {
            console.log('error deleteing this task');
            res.json({error: err});
        } else {
            console.log('successfully deleted task');
            res.json({message: "success"})
        }
    })

})

app.listen(8000, function() {
    console.log("listening on port 8000");
})