let score = "33a"

console.log(typeof score); //print string
console.log(typeof(score));// ---

let valueInNumber = Number(score) //converted in num
console.log(typeof valueInNumber);// print number
console.log(valueInNumber); //But actually not a number

// "33" ---> 33
// "33abc" ---> NaN
// true ---> 1 ; false ---> 0

let isLoggedIn = 1 //if the string is empty converted into false
//and is someting written in string --> true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); 