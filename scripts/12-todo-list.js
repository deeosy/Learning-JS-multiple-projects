const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  
  // we used the forEach() to loop through each item (in this case the item is the todoObject) in the array
  todoList.forEach((todoObject, i)=>{
    const {name, dueDate, dueTime} = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <div>${dueTime}</div>
      <button class="remove-button js-deleteBtn">Remove</button>
    `;
    todoListHTML += html;
  })
  document.querySelector('.js-todoList').innerHTML = todoListHTML;

  document.querySelectorAll('.js-deleteBtn').forEach((deleteBtn, i) => {
    deleteBtn.addEventListener('click', () => {
      todoList.splice(i, 1);
        renderTodoList();
    })
  })
}

document.querySelector('.js-addBtn').addEventListener('click', () => {
  addTodo();
})
document.body.addEventListener('keydown', (event) => {
  // console.log(event.key);  
  if(event.key === 'Enter'){
    addTodo();
  }
})


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