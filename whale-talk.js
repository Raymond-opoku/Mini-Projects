let input='turpentine and turtles';
const vowels=['a','e','i','o','u'];
let resultArray=[];
for(let i=0; i<input.length;i++){
  //console.log(i);
  for(let j=0;j<vowels.length;j++){
  //console.log(j) 
  if (input[i]===vowels[j]){
    resultArray.push(vowels[j]);
      } 
  }if(input[i]==='e'){
    resultArray.push(input[i]);
  }if(input[i]==='u'){
    resultArray.push(input[i]);
  }
}
resultArray=resultArray.join('');
console.log(resultArray.toUpperCase());