/* Globals  */
let todos = [];
let users = [];

/* Attach Events */
document.addEventListener("DOMContentLoaded", itinApp);

/* Event logic  */
function initApp() {
  PromiseAll([getAllToDos(), getAllToDos()]).then((values) => {
    [todos, users] = values;
    // send it to the page, draw them on the page
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
