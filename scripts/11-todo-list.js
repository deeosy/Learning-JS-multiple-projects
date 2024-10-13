const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  
  for(let i=0; i<todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name; 
    // const dueDate = todoObject.dueDate;
    // const dueTime = todoObject.dueTime;

    // short hand property (destructurting) for all the code above will be the line of code on line 26
    const {name, dueDate, dueTime} = todoObject;

    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <div>${dueTime}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="remove-button">Remove</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todoList').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-todoInput");
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-todoDate');
  const dueDate = dateInputElement.value;
  const timeInputElement = document.querySelector('.js-todoTime');
  const dueTime = timeInputElement.value;

  todoList.push(
    {
      // name: name,
      // dueDate: dueDate,
      // dueTime: dueTime,
      name,
      dueDate,
      dueTime,
    }
  );
  inputElement.value = '';
  renderTodoList();
}