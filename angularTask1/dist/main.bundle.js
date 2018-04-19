webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <button (click)=\"button1Clicked()\">Click to get all tasks</button>\n  <h3>tasks are:  </h3>\n\n\n  Enter task ID here: <input #id type=\"text\" name=\"id\">\n  <button (click)=\"button2Clicked(id.value)\" >Click to get one task</button>\n\n  <h2> New Task </h2>\n  <form (submit)=\"submitNewTask()\">\n    <p>{{ newTask | json }}</p>\n    title: <input type=\"text\" name=\"title\" [(ngModel)] = \"newTask.title\" >\n    description: <input type=\"text\" name=\"description\" [(ngModel)] = \"newTask.description\" >\n    <input type=\"submit\" value=\"Create\">\n  </form>\n\n  <h3>Tasks List </h3>\n  <div *ngFor=\"let task of tasks\">\n    <p> {{ task.description }} - {{ task.title }} </p>\n    <button (click)=\"editClicked(task)\" >Edit</button>\n    <button (click)=\"deleteClicked(task)\" >Delete</button>\n  </div>\n\n  <div *ngIf=\"show\">\n    <h3>Edit Task</h3>\n\n    <form (submit)=\"submitEditTask()\">\n      <p>{{ editTask | json }}</p>\n      title: <input type=\"text\" name=\"title\" value=\"editTask\" [(ngModel)] = \"editTask.title\" >\n      description: <input type=\"text\" name=\"description\" value=\"editTask\" [(ngModel)] = \"editTask.description\" >\n      <input type=\"submit\" value=\"Edit\">\n    </form>\n  </div>\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Restful Tasks CRUD';
        this.tasks = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTasksFromService();
        this.show = false;
        this.newTask = {
            title: "",
            description: ""
        };
        this.editTask = {
            _id: "",
            title: "",
            description: ""
        };
    };
    AppComponent.prototype.getTasksFromService = function () {
        var _this = this;
        var observable = this._httpService.getTasks();
        observable.subscribe(function (data) {
            console.log("Got our data!", data);
            _this.tasks = data['tasks'];
        });
    };
    AppComponent.prototype.button1Clicked = function () {
        var _this = this;
        var observable = this._httpService.getTasks();
        observable.subscribe(function (data) {
            console.log("Got our data!", data);
            _this.tasks = data['tasks'];
        });
    };
    AppComponent.prototype.button2Clicked = function (id) {
        var _this = this;
        console.log("input is: ", id);
        var observable = this._httpService.getTaskByID(id);
        observable.subscribe(function (data) {
            console.log("This is data: ", data);
            _this.tasks = data['task'][0].description;
        });
    };
    AppComponent.prototype.submitNewTask = function () {
        var _this = this;
        var observable = this._httpService.createTask(this.newTask);
        observable.subscribe(function (data) {
            console.log("recieved data: ", data);
            _this.newTask = { title: "", description: "" };
            _this.getTasksFromService();
        });
    };
    AppComponent.prototype.deleteClicked = function (task) {
        var _this = this;
        console.log(this.editTask._id);
        var observable = this._httpService.deleteTask(task._id);
        observable.subscribe(function (data) {
            console.log("Got our data!", data);
            _this.getTasksFromService();
        });
    };
    // updateClicked(task){
    //   let observable = this._httpService.updateTask(task._id)
    //   observable.subscribe(data => {
    //     console.log("got data: ", data)
    //     this.getTasksFromService()
    //   })
    // }
    AppComponent.prototype.editClicked = function (task) {
        this.show = true;
        console.log('task.title is: ', task.title);
        this.editTask = task;
        // this.editTask.title = task.title
        // this.editTask.description = task.description
        console.log('this.editTask is: ', this.editTask);
        console.log("this.editTask._id is: ", this.editTask._id);
        // this.editTask['editTitle'] = task.title
        // this.editTask['editDescription'] = task.description
        // let observable = this._httpService.updateTask(task._id)
        // observable.subscribe(data => {
        //   console.log("got data: ", data)
        //   this.getTasksFromService()
    };
    AppComponent.prototype.submitEditTask = function () {
        var _this = this;
        console.log("this.editTask is: ", this.editTask);
        var observable = this._httpService.updateTask(this.editTask);
        observable.subscribe(function (data) {
            console.log("got data: ", data);
            _this.show = false;
            _this.getTasksFromService();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        // this.getPokemon();
    }
    HttpService.prototype.getTasks = function () {
        console.log("in here");
        // our http response is an observable, store it in the variable tempObservable
        // let tempObservable = this._http.get('/tasks');
        // subscribe to our observable and provide the code we would like to do with our data from the response
        // tempObservable.subscribe(data => console.log("Got our tasks!", data));
        return this._http.get('/tasks');
    };
    HttpService.prototype.getTaskByID = function (id) {
        return this._http.get('/tasks/' + id);
    };
    HttpService.prototype.createTask = function (newTask) {
        return this._http.post('/tasks', newTask);
    };
    HttpService.prototype.deleteTask = function (id) {
        return this._http.delete('/tasks/' + id);
    };
    HttpService.prototype.updateTask = function (editTask) {
        console.log("editTask is: ", editTask);
        console.log("editTask.title is: ", editTask.title);
        return this._http.put('/tasks/' + editTask._id, editTask);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map