// ES6 import
import addItemService from './addItemService';

// Call angular service
var app = angular.module('app', []);

// Custom services
app.service('addItemService', addItemService);

// Controller
function ListController(addItemService) {
    this.newTodo = '';

    this.todoList = [];

    addItemService.addItem(this.todoList, this.newTodo);

    this.updateItem = function(item, index) {
        this.todoList[index].title = item.title;
    };

    this.getRemaining = function() {
        return this.todoList.filter(function(item) {
            return item.completed;
        });
    };

    this.deleteCompletedItems = function() {
        this.todoList = this.todoList.filter(function(item) {
            return !item.completed;  
        });
    };

}



// Code below need to make CommonJS modules work
// var app = angular
//      .module('app');

// CommonJS export
// module.exports = ListController;

// ES6 export
export default ListController;