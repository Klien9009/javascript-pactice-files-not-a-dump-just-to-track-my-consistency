const clock = document.getElementById('clock');
const start = document.getElementById('start');
const stop = document.getElementById('stop');


myinterval=setInterval(function (){
let date = new Date()
//console.log(date.toTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000)

function stopClock(){
  clearInterval(myinterval);
  console.log("stopped");
};

function startClock(){
  myinterval=setInterval(function (){
let date = new Date()
//console.log(date.toTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000)
}