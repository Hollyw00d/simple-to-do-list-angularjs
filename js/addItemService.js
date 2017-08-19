function addItemService() {
  this.addItem = function(myTodoList, myNewTodo) {
    myTodoList.push({
        title: this.myNewTodo,
        completed: false
    });

    myNewTodo = '';
  };
}


// this.addItem = function() {
//     this.todoList.push({
//         title: this.newTodo,
//         completed: false
//     });

//     this.newTodo = '';
// };


// ES6 export
export default addItemService;