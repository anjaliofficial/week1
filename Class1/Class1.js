// 1. Variable types
// const, let, var

const firstname = "Hari" // const cannot be reassigned / cannot be changed
// const firstname = "Ram" // cannot be reassigned
// firstname = "Ram" // cannot be changed

let lastName = "Rai" // let cannot be reassigned / can be changed
// let lastName = "Sharma" // cannot be reassigned
lastName = "Sharma" // can be changed

var age = 25 // var can be reassigned / can be changed
var age = 30 // can be reassigned
age = 32 // can be changed

// global scope
// scope of variable { }

if(true) {
    const city = "Kathmandu" // block scope
    let country = "Nepal" // block scope
    var continent = "Asia" // function scope
    
    console.log(city);
    console.log(country);
    console.log(continent);
}

// console.log(city); // cannot be accessed outside block
// console.log(country); // cannot be accessed outside block
console.log(continent); // can be accessed outside block

// 2. Data types
const stringType = "This is a string" // string " ", ' ', ` `
const numberType = 100 // number 1, 2, 3, 4.5, -5, 0.5
const booleanType = true // boolean true, false
const nullType = null // null - intended empty
let undefinedType // undefined // not assigned any value
let bigNumber = 9087763487348n // bigInt if number is greater than 2^31
let symbolType1 = Symbol("name") // symbol unique value
let symbolType2 = Symbol("name") // symbol unique value
// symbolType1 doesnot equal to symbolType2


console.log(typeof stringType); // string 
console.log(typeof nullType); // object (wempty )
console.log(typeof undefinedType); // Undefined 
console.log(typeof bigNumber); // bigint
console.log(typeof symbolType1 == symbolType2);






// Operators
// = (equal)
let x1 = 10 // one = , assignment operator
let x2 = 10 == "10" // two = , comparison operator
let x3 = 10 === "10" // three = , strict comparison operator

console.log(x1) // 10
console.log(x2) // true
console.log(x3) // false

console.log(true == "true");
console.log(10.2 === "10.2");
console.log(null == "undefined");





// Arithmetic / Mathematical
console.log(5 + 3)
console.log(5 - 3)
console.log(5 * 3)
console.log(5 / 3)
console.log(5 % 3)
console.log(2 ** 31)
let num1 = 5
console.log(num1++)
console.log(num1--)



// Assignment
let num2 = 10
num2 += 5 // num2 = num2 + 5
console.log(num2)
// any arithmetic operator before = is valid

// Comparison -> returns boolean value
console.log(5 > 3)
console.log(5 < 3)
console.log(5 >= 3)
console.log(5 <= 3)
console.log(5 != 3)
console.log(5 == 3)
console.log(5 === 3)


// Logical -> returns boolean value
console.log(true && false) // AND
console.log(true || false) // AND
console.log(!true) // NOT


/// Nullish Coalescing Operator (??)
let stats
let var2 = stats ?? "N/A"
console.log(var2) // "N/A"

// Ternary Operator
let age1 = 18
let canVote = (age1 >= 18) ? "Yes, can vote" : "No, cannot vote"
console.log(canVote)


// conditional statement
if(false) {
    console.log("if")
} else if(1==1) {
    console.log("else if")
} else {
    console.log("else")
}


// loops
// for loop
for(let  i = 0; i< 5; i++){
    console.log("For loop iteration: " + i);
}

// while loop
let j = 0
while(j < 5){
    console.log("While loop iteration: "+ i);
}

// while loop
let j = 0
while(j<5){
    console.log("While loop iteration: "+ j);
    j++;
}


do{
    console.log("Runs 1")
} while(false)
    

