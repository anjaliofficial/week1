// List/array
const arr = [3,4,5]
const arr2 = [1, true, undefined, "Hello"]
// data type is not restricted in JS
// Spread operator
const arr3 = [arr, 3, 5] // [ [3,4,5], 3, 5 ]
const arr4 = [...arr, 3, 5] // [3,4,5,3,5]
const arr5 = [...arr, ...arr2] // [3,4,5,1,true,undefined,"Hello"]
console.log(arr5)
arr.push(10) // adds element at the end
console.log(arr)
const popped = arr.pop() // removes element from the end
console.log(popped)
arr.unshift(100) // adds element at the start
const shifted = arr.shift() // removes element from the start
console.log(shifted)
console.log(arr)