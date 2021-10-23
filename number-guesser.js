let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>{
  let randomNumber=Math.floor(Math.random()*10);
  return randomNumber;
}
const compareGuesses=(human,computer,secret)=>{
  secret=generateTarget();
  let humanCloseTarget=Math.abs(human-secret);
  let computerCloseTarget=Math.abs(computer-secret);
if (humanCloseTarget > computerCloseTarget ){
  return false;
}else if(humanCloseTarget < computerCloseTarget || humanCloseTarget=== computerCloseTarget){
  return true;
}
}
const updateScore=(winner)=>{
if (winner==='human'){
  humanScore++;
}else{
  computerScore++;
}
}
const advanceRound=()=>{
currentRoundNumber+=1;
}