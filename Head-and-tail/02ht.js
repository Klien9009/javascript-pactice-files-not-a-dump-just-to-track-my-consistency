


let score= JSON.parse(localStorage.getItem('score'))|| {
Wins:0,
Losses:0,
Draw:0
};

console.log(score)


function Aki(playerMove){
  const playerCharacter = computerMoves();
  let result = '';
  if(playerMove === 'Aki'){
    if (playerCharacter === 'Aki'){
      result = 'Draw.';
    }else if(playerCharacter === 'Denji'){
      result = 'You lose.';
    }else if(playerCharacter === 'Power'){
      result = 'You win.';
    }else if(playerCharacter === 'Himeno'){
      result = 'You win.';
    }else if(playerCharacter === 'Makima'){
      result = 'You lose.';
    }
    console.log(result);
  }else if(playerMove === 'Denji'){
    if (playerCharacter === 'Aki'){
      result = 'You win.'
    }else if(playerCharacter === 'Denji'){
      result = 'Draw.'
    }else if(playerCharacter === 'Power'){
      result = 'You win.'
    }else if(playerCharacter === 'Himeno'){
      result = 'You win.'
    }else if(playerCharacter === 'Makima'){
      result = 'You lose.'
    }

  }else if(playerMove === 'Power'){
    if (playerCharacter === 'Aki'){
      result = 'You lose.'
    }else if(playerCharacter === 'Denji'){
      result = 'You lose.'
    }else if(playerCharacter === 'Power'){
      result = 'Draw.'
    }else if(playerCharacter === 'Himeno'){
      result = 'You win.'
    }else if(playerCharacter === 'Makima'){
      result = 'You lose.'
    }

  }else if(playerMove === 'Himeno'){
    if (playerCharacter === 'Aki'){
      result = 'You lose.'
    }else if(playerCharacter === 'Denji'){
      result = 'You Lose.'
    }else if(playerCharacter === 'Power'){
      result = 'You lose.'
    }else if(playerCharacter === 'Himeno'){
      result = 'Draw.'
    }else if(playerCharacter === 'Makima'){
      result = 'You lose.'
    }

  }else if(playerMove === 'Makima'){
    if (playerCharacter === 'Aki'){
      result = 'This character is illegal, pls choose another💀.'
    }else if(playerCharacter === 'Denji'){
      result = 'This character is illegal, pls choose another💀.'
    }else if(playerCharacter === 'Power'){
      result = 'This character is illegal, pls choose another💀.'
    }else if(playerCharacter === 'Himeno'){
      result = 'This character is illegal, pls choose another💀.'
    }else if(playerCharacter === 'Makima'){
      result = 'This character is illegal, pls choose another💀.'
    }
  }

  if (result === 'You win.'){
    score.Wins++
  }else if (result === 'You lose.'){
    score.Losses++
  }else if (result === 'Draw.'){
    score.Draw++
  }

   localStorage.setItem('score', JSON.stringify(score));
   console.log(score)

  alert(`You Choose: ${playerMove} || Computer Choose: ${playerCharacter}, 
Result: ${result}, 
Wins: ${score.Wins} , Losses: ${score.Losses} , Draw: ${score.Draw}`) 
}



function computerMoves(){
  let computermove = Math.random();
  let computerCharacter = '';
  if (computermove >= 0 && computermove < 1/5 ){
    computerCharacter = 'Aki';//power lvl 50%
    console.log(`computer choose:${computerCharacter}`);
  }else if (computermove >= 1/5 && computermove < 2/5){
    computerCharacter = 'Denji';//power lvl 75%
    console.log(`computer choose: ${computerCharacter}`)
  }else if (computermove >= 2/5 && computermove < 3/5){
    computerCharacter = 'Power';//power lvl 40%
    console.log(`computer choose: ${computerCharacter}`)
  }else if (computermove >= 3/5 && computermove < 4/5){
    computerCharacter = 'Himeno';//power lvl 25%
    console.log(`computer choose: ${computerCharacter}`)
  }else if (computermove >= 4/5 && computermove < 5){
    computerCharacter = 'Makima';//power lvl 100%
    console.log(`computer choose: ${computerCharacter}`)
  }
  return(computerCharacter);
};