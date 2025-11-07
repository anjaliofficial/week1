// Promise Async Await 
// Future then/catch 


console.log(1)
setTimeout (()=> console.log(2), 1000) // run agfter 1 sec
console.log(3)




// Promise
const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" Success"); // success callback
    }, ms);
  });
};

console.log("Start");
delay(2000).then(msg => console.log(msg)); // waits 2 seconds before resolving
console.log("End");
