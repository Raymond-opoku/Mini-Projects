const getSleepHours=day=>{
 switch(day){
  case 'monday':
     return 8;
     break;
  case 'tuesday':
     return 5;
     break;
    case 'wednesday':
    return 8;
    break;
  case 'thursday':
     return 7;
     break;
  case 'friday':
     return 5;
     break;
  case 'saturday':
     return 6;
     break;
  case 'sunday':
     return 8;
     break;
     default:
     return 'Wrong Selection';
     break;
 }
}
//console.log(getSleepHours('saturday'));
const getActualSleepHours=()=>getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
const getIdealSleepHours=()=>{
  let idealHours=8;
  return idealHours*7;
}
console.log(getActualSleepHours())
console.log(getIdealSleepHours())
const calculateSleepDebt=()=>{
  let actualSleepHours=getActualSleepHours()
  let idealSleepHours=getIdealSleepHours()
  if (actualSleepHours===idealSleepHours){
    console.log('You got the perfect amount of sleep')}
    else if(actualSleepHours>idealSleepHours){
      console.log('You got'+(idealSleepHours-actualSleepHours)+ 'hours more sleep than  needed')}
      else if(actualSleepHours < idealSleepHours){
 console.log('You got '+(idealSleepHours-actualSleepHours)+ 'hour(s) less sleep than you needed. Need to get some rest')     }
    }
  
calculateSleepDebt()
