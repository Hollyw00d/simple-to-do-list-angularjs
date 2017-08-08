var app = angular
    .module('app', []);

var ListController = require('./ListController');

app
    .controller('ListController', ListController);