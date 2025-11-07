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

// array access 
console.log(arr[0])
console.log(arr.at(0))
arr[0] = 500 // although variable is const, array are mutable so hamine const use garda ni value change garna milchhha bbbut as a whole array change garna chai mildaina


//Iterate Array 
for (let i =0; i<arr.length; i++){
    console.log(i, aee[i])
}

// iterate with indes 
for (let index in arr){
    console.log(index, arr[index])



}

// iterate with value 
for (let value of arr){
    console.log(value)
}



