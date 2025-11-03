// functions 
function greet(name) {
    return "Hello, " + name + "!"
}
let first = greet("Alice")
console.log(first) // Hello, Alice!

function add(a, b) {
    return a + ' ' + b
}
let second = add("Apala", "Cutie")
console.log(second)


// no restriction of arguments and return 
function greetNormal(){
    console.log("Hello World")
}
greetNormal()


// 


const arrowFunc = ()=> "Hello from arrow function"
console.log(arrowFunc())


// characterstics of arrow function in theory 

const arrowFunc2 = (firstName) => {
    // function statements
    return "Hello " + firstName
}

console.log(arrowFunc2("Anjali"))



const add1 = (a, b) => a + b
const subtract = (a, b) => {
    a - b
}



// practice 
// make a function with "function " keyword named average1
// that takes three parameters and returns their average
//make a same function using arrow function named average2 without scope
//make the same function using arrow function named average3 with scope 

function average1(num1, num2, num3) {
    let average=  (num1 +num2+num3) / 3
    return average
}
const average2 = (num1, num2, num3) => (num1 + num2 + num3) / 3  
const average3 = (num1, num2, num3 )=> {
    let average = (num1 + num2 + num3) / 3
    return average
}






// higher order functions / Callback functions  c
const cb1 = (a,b,operation) => {
    console.log("Starting operatoion")
    // logics
    return operation(a,b)
}


let num1 = 10
let num2 = 5
let sunFunc = (a,b) =>{
    let sum = a + b
    console.log(sum)
    return sum
}


cb1(num1, num2, sunFunc)

const res2 = cb1(20,30, (a,b) =>  a -b )
console.log(res2)


// practice 

// make a function  named userStatus thatt takes two parameters
// first parameter is a string named username
// second paramater is a call back function that takes username as parameter 
//make 2 function to pass in the callback 
//first function is named isAdmin that returns true if username is "admin" else false
//second function is named isGuest that returns true if username is "guest" else false
//call userStatus function with different usernames and callback functions and log the results
const userStatus  = (username, callback) => {
    let status = callback (username)
    return status
}

const isAdmin = (username) => {
    let result = username === "admin" ? true : false
    return result
}

const isGuest = (username) =>{
    let result = username === "guest" ? true : false
    return result
}

console.log( userStatus("admin", isAdmin)) // true
console.log( userStatus("user1", isAdmin)) // false
console.log(userStatus("guest", isGuest))
console.log(userStatus("user2", isGuest)) // false
