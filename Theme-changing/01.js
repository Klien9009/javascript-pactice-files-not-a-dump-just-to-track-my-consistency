const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const heading = document.querySelector('h1')

buttons.forEach(function(button) {
  console.log(button);
  addEventListener('click',function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'dark') {
      body.style.backgroundColor = 'black';
      heading.style.color = 'white';
    };
    if(e.target.id === 'light') {
      body.style.backgroundColor = 'white';
      heading.style.color = 'black';
    };
    if(e.target.id === 'light-green') {
      body.style.backgroundColor = 'lightgreen';
      heading.style.color = 'white';
    };
    if(e.target.id === 'light-pink') {
      body.style.backgroundColor = 'lightpink';
      heading.style.color = 'white';
    };
  });
});