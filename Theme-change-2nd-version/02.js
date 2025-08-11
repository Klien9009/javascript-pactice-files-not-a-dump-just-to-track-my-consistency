const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const heading = document.querySelector('h1')

const colors = {
  Dark: {bg:'black', text:'white'},
  Light: {bg:'white', text:'black'},
  LightGreen: {bg:'lightgreen', text:'black'},
  LightPink: {bg:'LightPink', text:'black'},
  LightYellow: {bg:'lightyellow', text:'black'},
  LightLateGrey: {bg:'lightslategrey', text:'white'},
}


buttons.forEach(function(button){
  console.log(button);
  addEventListener('click',function(e){

    const theme = colors[e.target.id];

    if(theme){
      body.style.backgroundColor = theme.bg;
      heading.style.color = theme.text;
    }
  })
})