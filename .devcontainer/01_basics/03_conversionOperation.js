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

// ------------*Operations*------------//
let str1 = "Sweta"
let str2 = " Devang"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");  //dont do these confusion things