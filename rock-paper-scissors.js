const getUserChoice=userInput=>{
  userInput = userInput.toLowerCase()
if (userInput === 'rock' || userInput==='paper' || userInput==='scissors'|| userInput==='bomb'){
    return userInput;
  }else{
    console.log('Wrong Selection');
  };
}
//console.log(getUserChoice('paper'));
const getComputerChoice=()=>{
randomNumber=Math.floor(Math.random()*3);
if (randomNumber===0){
  return 'rock'
}else if (randomNumber===1){
  return 'paper'
}else if(randomNumber===2){
  return 'scissors'
}else{
  console.log('Something went wrong')
}
}
//console.log(getComputerChoice());
const determineWinner=(userChoice,computerChoice)=>{
  if(userChoice==='bomb'){
    return 'You won'
  }
  if (computerChoice===userChoice){
    return 'The game was a tie';
  }if (userChoice==='rock'){
    if (computerChoice==='paper'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
  }if (userChoice==='paper'){
    if (computerChoice==='scissors'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
    }if (userChoice==='scissors'){
    if (computerChoice==='rock'){
      return 'The computer won!';
    }else{
      return 'You won!';
    }
}
}
//console.log(determineWinner('scissors','rock'));
const playGame=()=>{
  let userChoice=getUserChoice('Paper');
  let computerChoice=getComputerChoice();
  console.log(userChoice,computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();