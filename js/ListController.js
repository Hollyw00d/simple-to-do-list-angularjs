function ListController($log, $document) {
    var self = this;
    self.newTodo = '';

    self.todoList = [];

    self.addItem = function() {
        self.todoList.push({
            title: self.newTodo,
            completed: false
        });

        self.newTodo = '';
    };

    self.updateItem = function(item, index) {
        self.todoList[index].title = item.title;
    };
}

ListController.$inject = ['$log', '$document'];


angular
    .module('app')
    .controller('ListController', ListController);