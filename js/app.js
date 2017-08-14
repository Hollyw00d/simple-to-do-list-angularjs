var app = angular
    .module('app', []);

// CommonJS import
// var ListController = require('./ListController');

// ES6 import
import todo from './ToDoDirective';

// ES6 import
import ListController from './ListController';

app
    .directive('todo', todo);

app
    .controller('ListController', ListController);