const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let currentlyPlaying=true;

class Field{
  constructor(field){
    this._field=field;
    this.y=0;
    this.x=0;
  }
  get field(){
    return this._field;
  }
  print(){
return this._field.map(row=>row.join('')).join('/n')
  }
  userInput(){
    let move=prompt('Which would you like to move: U,D,L or R')
  switch(move.toLowerCase()){
    case 'u':
      console.log('UP')
      this.y+=1;
      break;
    case 'd':
      console.log('DOWN')
      this.y-=1;
      break;
    case 'l':
      console.log('LEFT')
      this.x-=1;
      break;
    case 'r':
      console.log('RIGHT')
      this.x+=1;
      break;
    default:
      break;
  }
  }
  chkWinner(){
    if (this.field[this.y] == undefined) {
            console.log('You lose - Out of boundary');
            return currentlyPlaying = false;            
        }
        //
        switch (this.field[this.y][this.x]) {
            case hole:
                console.log('You lose - You fell in a hole!');
                currentlyPlaying = false;
                break;
            case undefined:
                console.log('You lose - Out of boundary');
                currentlyPlaying = false;
                break;
            case hat:
                console.log('You win - You found the hat!');
                currentlyPlaying = false;
                break;
            case fieldCharacter:
                console.log('Keep looking for the hat...');
                this.field[this.y][this.x] = pathCharacter;
                break;
            case pathCharacter:
                console.log('You are stepping on *');
                break;
        } 
  }
  static generateField(height,width,percentage){
const holeOrField=(percentage)=>{
  if(percentage>=0&&percentage<=100){
    const randNum=Math.floor(Math.random()*100);
    if(randNum< percentage){
      return hole;
    }else{
      return fieldCharacter;
    }
  }else{
    console.log('Enter a number between 0-100');
  }
}
const plainFields = () => {
     function makeWidthArray() {
       let widthArray = [];
      for (let i=0; i < width; i++) {
    widthArray.push(holeOrField(percentage));
    }
    return widthArray;
     }
let plainField = [];
  for (let i=0; i < height; i++) {
  plainField.push(makeWidthArray());
  }
  return plainField;
  }
  
   
const gameReadyField = plainFields();

  do {
  gameReadyField[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = hat;
  }   while (gameReadyField[0][0] == hat);
        
        //Adding pathCharacter to left-upper corner
  gameReadyField[0][0] = pathCharacter;
return gameReadyField;
  }

} 

const myField = new Field(Field.generateField(10,10,30));

function game() {
    while(currentlyPlaying) {
        console.log(myField.print());
        myField.userInput();
        myField.chkWinner();
    }
    console.log('Game Over!');
}

game();

