// Promise Async Await 
// Future then/catch 


console.log(1)
setTimeout (()=> console.log(2), 1000) // run agfter 1 sec
console.log(3)




// Promise
const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(`Failure `)
    //   resolve(" Success"); // success callback
    }, ms);
  });
};



console.log("Start");
delay(2000)
.then(msg => console.log(msg))// waits 2 seconds before resolving
.catch (err => console.log(err)) // wait for promise to reject  
console.log("End");




const PromiseCall = async() => {
    console.log("Start")
    try {
        const res = await delay(2000) // blocking 
    console.log(res) // resolved values

    } catch(err){
        console.log(err) // reject value 
    }
     delay(2000)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))


    console.log("End")
}

PromiseCall()