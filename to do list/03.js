const todoList =[{
  name:'Make Dinner',
  dueDate: '2002-12-22',
},{
  name:'Wash Dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
   // const name = todoObject.name;
   // const dueDate= todoObject.dueDate;
    const{name,dueDate} = todoObject;
    const html = 
    `<p>
      ${name} ${dueDate}
      <button onclick= "todoList.splice(${i},1);
      renderTodoList();">Delete</button>
    </p>`;    //generating the HTML
    todoListHTML += html;
  }


  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}


function AddTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });


  inputElement.value = '';

  renderTodoList();
}
