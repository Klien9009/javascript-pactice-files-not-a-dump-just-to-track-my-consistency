const todoList =['Make Dinner', 'Wash Dishes'];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;    //generating the HTML
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}


function AddTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);


  inputElement.value = '';

  renderTodoList();
}
