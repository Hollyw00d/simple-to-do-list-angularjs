var ListController = function() {
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

    self.getRemaining = function() {
        return self.todoList.filter(function(item) {
            return item.completed;
        });
    };

    self.deleteCompletedItems = function() {
        self.todoList = self.todoList.filter(function(item) {
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