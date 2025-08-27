const todolist =[];

function AddTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  
  todolist.push(name);
  console.log(todolist);


  inputElement.value = '';
}
