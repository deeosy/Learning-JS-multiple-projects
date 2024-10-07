const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  
  for(let i=0; i<todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
    console.log(todoListHTML)
  }
  console.log(todoListHTML);
  document.querySelector('.js-todoList').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-todoInput");
  const todoName = inputElement.value;
  todoList.push(todoName);
  console.log(todoList);
  inputElement.value = '';
  renderTodoList();
}