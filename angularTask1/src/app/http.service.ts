import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
      // this.getPokemon();
  }

  getTasks(){
    console.log("in here")
    // our http response is an observable, store it in the variable tempObservable
    // let tempObservable = this._http.get('/tasks');

    // subscribe to our observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks')
  }

  getTaskByID(id){
    return this._http.get('/tasks/' + id)
  }

  createTask(newTask){
    return this._http.post('/tasks', newTask)
  }

  deleteTask(id){
    return this._http.delete('/tasks/' + id)
  }

  updateTask(editTask){
    console.log("editTask is: ", editTask)
    console.log("editTask.title is: ", editTask.title)
    return this._http.put('/tasks/' + editTask._id, editTask)
  }
  
}

