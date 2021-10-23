const kelvin=293;
//vconverting kelvin to celsius
let celsius;
celsius=kelvin-273;
//converting celsius to fahrenheit
let fahrenheit;
fahrenheit=celsius*(9/5)+32;
//rounding up fahrenheit to the nearest whole number
fahrenheit=Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit and ${celsius}.`);
//converting celsius to newton
let newton;
newton=celsius*(33/100);
newton=Math.floor(newton)
console.log(`The Temperature is ${newton} newtons`);