// const { use } = require("react")

// // functions 
// function greet(name) {
//     return "Hello, " + name + "!"
// }
// let first = greet("Alice")
// console.log(first) // Hello, Alice!

// function add(a, b) {
//     return a + ' ' + b
// }
// let second = add("Apala", "Cutie")
// console.log(second)


// // no restriction of arguments and return 
// function greetNormal(){
//     console.log("Hello World")
// }
// greetNormal()


// // 


// const arrowFunc = ()=> "Hello from arrow function"
// console.log(arrowFunc())


// // characterstics of arrow function in theory 

// const arrowFunc2 = (firstName) => {
//     // function statements
//     return "Hello " + firstName
// }

// console.log(arrowFunc2("Anjali"))



// const add1 = (a, b) => a + b
// const subtract = (a, b) => {
//     a - b
// }



// // practice 
// // make a function with "function " keyword named average1
// // that takes three parameters and returns their average
// //make a same function using arrow function named average2 without scope
// //make the same function using arrow function named average3 with scope 

// function average1(num1, num2, num3) {
//     let average=  (num1 +num2+num3) / 3
//     return average
// }
// const average2 = (num1, num2, num3) => (num1 + num2 + num3) / 3  
// const average3 = (num1, num2, num3 )=> {
//     let average = (num1 + num2 + num3) / 3
//     return average
// }






// // higher order functions / Callback functions  c
// const cb1 = (a,b,operation) => {
//     console.log("Starting operatoion")
//     // logics
//     return operation(a,b)
// }


// let num1 = 10
// let num2 = 5
// let sunFunc = (a,b) =>{
//     let sum = a + b
//     console.log(sum)
//     return sum
// }


// cb1(num1, num2, sunFunc)

// const res2 = cb1(20,30, (a,b) =>  a -b )
// console.log(res2)


// // practice 

// // make a function  named userStatus thatt takes two parameters
// // first parameter is a string named username
// // second paramater is a call back function that takes username as parameter 
// //make 2 function to pass in the callback 
// //first function is named isAdmin that returns true if username is "admin" else false
// //second function is named isGuest that returns true if username is "guest" else false
// //call userStatus function with different usernames and callback functions and log the results
// const userStatus  = (username, callback) => {
//     let status = callback (username)
//     return status
// }

// const isAdmin = (username) => {
//     let result = username === "admin" ? true : false
//     return result
// }

// const isGuest = (username) =>{
//     let result = username === "guest" ? true : false
//     return result
// }

// console.log( userStatus("admin", isAdmin)) // true
// console.log( userStatus("user1", isAdmin)) // false
// console.log(userStatus("guest", isGuest))
// console.log(userStatus("user2", isGuest)) // false


// // practice with annonymous function
// // pass an annonymous finction as calllback to check id user is "student "

// userStatus("student", function(username ){
//     return username === "student" ? true : false
// })


// // let scenario1 = userStatus("student", function(username ) => username === "student")

// let scenario6 = userStatus("teacher", (username) => {
//     return username === "teacher"
// })
// console.log(scenario1) // true
// console.log(scenario6) // false


// closures in theory
function outerFunc(outerVar) {
    console.log("Outer function called")
    return function innerFunc(innerVar) {
        console.log("Inner function called")
        console.log("Outer variable: " + outerVar)
        console.log("Inner variable: " + innerVar)
    }   
}
const newFunc = outerFunc("outside") // runs outer function
newFunc("inside") // runs inner function with outer variable preserved

// practice 
// make a closure function named multiplyBy that takes a number as parameter
// returns an inner function that takes another number as parameter
// the inner function returns the product of the two numbers


const counter = (start ) => {
    let count = start
    return () => {
        count++
        return count
    }

}

const addOne = counter(5)

console.log(addOne()) //6
console.log(addOne()) //7
console.log(addOne()) //8



// practinc e
// make a function student record that takes name and age as parameters
// inside studentrecord make another fuction addmarks that takes marks as parameter
// (science, math, english)
// the addmarks function returns an object with name, age and marks
//student record should return addmarks function
// calll student record with different names and store the returned function

const studentRecord = (name, age) => {
    return (science, math, english) => {
        return {
            name: name,
            age: age,
            marks: {
                science: science,
                math: math,
                english: english
            }
        }
    }
}


const student1 = studentRecord("Anjali", 20)
const record1 = student1(85, 90, 95)
console.log(record1)


// 