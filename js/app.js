var app = angular
    .module('app', []);

// CommonJS import
// var ListController = require('./ListController');

// ES6 import
import todo from './ToDoDirective';

// ES6 import
import addItemService from './addItemService';

app
    .directive('todo', todo);

app
    .service('addItemService', addItemService);

app
    .controller('ListController', ['addItemService', function ListController(addItemService) {
        console.log('Blah!');

        this.todoList = [];

        this.newTodo = '';
    
        //this.addItem = addItemService.addItem;

        this.addItem = function() {
            this.todoList.push({
                title: this.newTodo,
                completed: false
            });
    
            this.newTodo = '';
        };
    
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
    
    }]);


