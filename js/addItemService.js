function addItemService() {
  // this.todolist = [];
  // this.newTodo = '';

  this.addItem = function() {
    this.todolist.push({
        title: this.newTodo,
        completed: false
    });

    this.newTodo = '';
  };
}

//this.todoList = [];

//this.newTodo = '';


// this.addItem = function() {
//     this.todoList.push({
//         title: this.newTodo,
//         completed: false
//     });

//     this.newTodo = '';
// };


// ES6 export
export default addItemService;