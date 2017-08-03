function ListController($log, $document) {
    var self = this;
    self.newTodo = '';

    self.todoList = [];

    self.addItem = function() {
        self.todoList.unshift({
            title: self.newTodo,
            completed: false
        });

        self.newTodo = '';
    };

    self.toggleState = function(item) {
        if(self.todoList.completed) {
            return 'crossedout';
        }
        else {
            return 'normal';
        }
    }
}

ListController.$inject = ['$log', '$document'];


angular
    .module('app')
    .controller('ListController', ListController);