var app = angular
    .module('app', []);

// CommonJS import
// var ListController = require('./ListController');

// ES6 import
import ListController from './ListController';

app
    .controller('ListController', ListController);