// object/MAP/Record

// Object/Map/Record
const person = {
    firstName: "Hari",
    age: 30,
    "isAdmin":false,
    hobbies: ["reading","travelling"],
    address: {
        street: "Kathmandu",
        country: "Nepal"
    }
}
console.log(person)
console.log(person.firstName)
console.log(person["firstName"])
person.age = 31 // modify
person.isAdmin = true
console.log(person.hobbies[0])
console.log(person.address.street)
delete person.hobbies // delete key



// Nullish Chcek 
console.log(person.address.home) //undefined 
// console.log(person.address.home.number) // error , cannot read property of undefined 
console.log(person.address.home?.number) //  undefined 
console.log(person.address.home?.number?.prefix) //  undefined  

const arr = [500, 4, 5]

console.log(person.address?.home?.number ?? 0) // 0
console.log(person.address?.home?.continent ?? "Not specified") // Not specified

console.log(person.gender?.type ?? "N/A") // N/A


//Array/Iterable/functions 
//forEach, map, filter, reduce 

arr.forEach(
    (value, index) => {
        console.log(index, value)
    }
)

// call back can take 3 args : valye , index, array 
arr.forEach(elem => console.log(elem*2))

//forEach does not return anything 


const mappedArr = arr.map(value => value*3)
console.log(mappedArr)
const mappedArr2 = arr.map((value, index) =>{
    return value+index
})

console.log(mappedArr) // map returns new array/with same size length 


const names = ['Apala', 'Anjali', 'Anisa']
const components = names.map(name => `<li>${name}</li>`);


console.log(components)



const filteredArr = arr.filter(value => value > 10)
console.log(filteredArr) // filter returns new array with size <= original array

const reducedVal = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0 // 2nd args, initial value of accumulator
)
console.log(reducedVal) // reduce returns single aggregated value



// practice 
const cart = [
    {name: "milk", categoery: "grocery", price:2.5, qty: 2 , inStock:true },
    {name: "Shampoo", categoery: "beauty", price:1.8, qty:  3, inStock:false },
    {name: "Egg", categoery: "grocery", price:5.0, qty: 1, inStock:true },
];

// use filter to keep only in-stock grocery items.
// use map to transform each kept item into {name, qty, lineTotal}
// Where Like total = price * qty 
// Use reduce to get total cost of all item in cart 

const filterCart = cart.filter(item => item.inStock && item.categoery === "grocery")
const mappedCart = filterCart.map(
    item => (
        {
            name: item.name,
            qty:item.qty,
            lineTotal: item*price*item.qty
        }
    )
)

const grandTotal = mappedCart.reduce(
    (acc, item ) => acc + item.lineTotal, 0
)

console.log("Grand Total : ", grandTotal)