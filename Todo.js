export var Todo=[{id: 3,Name:"Shivansh", Age:22, Description:"What do you say to death when it comes? Not Today ", completed: false},{id: 2,Name:"Geralt", Age:52, Description:"With age comes the wisdom", completed: false},{id: 5772,Name:"Bob", Age:30, Description:"Random happy fellla", completed: false}]


export function setTodo(newTodo){
    Todo=[...Todo,newTodo]
};
export function delTodo(newTodo){

    Todo= newTodo
};
export function updateTodo(newTodo){

    Todo= newTodo
};

