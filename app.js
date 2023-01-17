/* Globals  */
const todoList = document.getElementById("todo-list");
let todos = [];
let users = [];

/* Attach Events */
document.addEventListener("DOMContentLoaded", itinApp);

/* Basic logic  */
function getUserName(userId) {
  const user = users.find((u) => u.i === userId);
  return user.name;
}
function printTodo({ id, userId, title, complete }) {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.id = id;
  li.innerText = `<span>${title} by <b>${getUserName(userId)}</b>`;

  todoList.prepend(li);

}

/* Event logic  */
function initApp() {
  PromiseAll([getAllToDos(), getAllToDos()]).then((values) => {
    [todos, users] = values;
    // send it to the page, draw them on the page
    todos.forEach((todo) => printTodo(todo));
  });
}

/* Async logic  */
async function getAllToDos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
}

async function getAllUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
}
