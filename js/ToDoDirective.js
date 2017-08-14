function todo() {
    return {
        restrict: 'E',
        controller: 'ListController as list',
        scope: {},
        templateUrl: 'html/todo.html' 
    };
}

// ES6 export
export default todo;