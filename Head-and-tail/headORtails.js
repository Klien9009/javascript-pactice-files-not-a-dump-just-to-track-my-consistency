function compare(playerMove) {
  const computerGeusses = geussHeadOrTail();
  let result = '';
  if(playerMove === 'Head'){
    if(computerGeusses === 'head'){
      result = 'Right. You win.';
    }else {
      result = 'Wrong. You lose.';
    } 
  }else if (playerMove === 'Tails') {
    if(computerGeusses === 'head'){
      result = 'Wrong. You lose.';
    }else {
      result = 'Right. You win.';
    }    
  }

  alert(`Your geuss: ${playerMove}, Coin: ${computerGeusses}
result: You Geussed ${result}`)
}
//console.log(compare)


function geussHeadOrTail(){
  const randomGeuss = Math.random();
  let computerGeuss = '';
  if(randomGeuss >= 0 && randomGeuss < 1/2) {
    computerGeuss = 'head';
  }else{
    computerGeuss = 'tail';
  };

  return(computerGeuss);
};

