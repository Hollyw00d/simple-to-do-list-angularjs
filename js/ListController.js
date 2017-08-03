function ListController($log) {
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
            $log.log(self.todoList);
        }
        else {
            $log.log(self.todoList);
        }
    }
}

ListController.$inject = ['$log'];


angular
    .module('app')
    .controller('ListController', ListController);