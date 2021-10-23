let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly=false;
let runnersAge=20;
if (runnersAge>18 && registeredEarly){
  raceNumber+=1000;
}
   if (runnersAge > 18 && registeredEarly){
    console.log(`Your race starts at 9:30am ${raceNumber}`);  
    }
    else if(runnersAge>18 && !registeredEarly){
      console.log(`Your race starts at 11:00am ${raceNumber}`);
      }

else if(runnersAge < 18){
  console.log(`Your race starts at 12:30pm ${raceNumber}`);
}
else{
  console.log('See the registration desk');
}
