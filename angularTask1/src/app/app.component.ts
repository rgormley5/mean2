import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks CRUD';
  tasks = [];
  newTask: any;
  show: boolean;
  editTask: any;

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.getTasksFromService()
    this.show = false
    this.newTask = {
      title: "",
      description: ""
    }
    this.editTask = {
      _id: "",
      title: "",
      description: ""
    }
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data['tasks'];
    })
  }

  button1Clicked(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data['tasks'];
    })
  }

  button2Clicked(id){
    console.log("input is: ", id)

    let observable = this._httpService.getTaskByID(id)
    observable.subscribe(data => {
      console.log("This is data: ", data)
      this.tasks = data['task'][0].description;
    })
  }

  submitNewTask(){
    let observable = this._httpService.createTask(this.newTask)
    observable.subscribe(data => {
      console.log("recieved data: ", data)
      this.newTask = {title: "", description: ""}
      this.getTasksFromService()
    })
  }
  
  deleteClicked(task){
    console.log(this.editTask._id)
    let observable = this._httpService.deleteTask(task._id)
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.getTasksFromService()
    })
  }

  // updateClicked(task){
  //   let observable = this._httpService.updateTask(task._id)
  //   observable.subscribe(data => {
  //     console.log("got data: ", data)
  //     this.getTasksFromService()
  //   })
  // }

  editClicked(task){
    this.show = true 
    console.log('task.title is: ', task.title)
    this.editTask = task
    // this.editTask.title = task.title
    // this.editTask.description = task.description
    console.log('this.editTask is: ', this.editTask)
    console.log("this.editTask._id is: ", this.editTask._id)
    // this.editTask['editTitle'] = task.title
    // this.editTask['editDescription'] = task.description
    // let observable = this._httpService.updateTask(task._id)
    // observable.subscribe(data => {
    //   console.log("got data: ", data)
    //   this.getTasksFromService()
  }

  submitEditTask(){
    console.log("this.editTask is: ", this.editTask)
    let observable = this._httpService.updateTask(this.editTask)
    observable.subscribe(data => {
      console.log("got data: ", data)
      this.show = false
      this.getTasksFromService()
    })
  }

}
