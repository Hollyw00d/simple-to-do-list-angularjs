function ListController() {
    this.newTodo = '';

    this.todoList = [];

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

}

// Code below need to make CommonJS modules work
// var app = angular
//      .module('app');

// CommonJS export
// module.exports = ListController;

// ES6 export
export default ListController;