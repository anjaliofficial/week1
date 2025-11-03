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
getreetNormal()


// 


const arrowFunc = ()=> "Hello from arrow function"
console.log(arrowFunc())


// characterstics of arrow function in theory 

const arrowFunc2 = (firstName) => {
    // function statements
    return "Hello " + firstName
}

console.log(arrowFunc2("Anjali"))
