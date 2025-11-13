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
    delay(2000) // non-blocking
    .then(msg => console.log(msg))
    .catch(err => console.log(err))


    console.log("End")
}

PromiseCall()

const SequentialPromise = async()=>{
    console.time("SequentialPromise")
    const res1 = await delay(3000)
    console.log(res1)

    const res2 = await delay(5000)

    console.log(res2)

    // wait timw is sum of both 

    console.timeEnd("SequentialPromise")
} 


const parellelPromise = async()=>{
    console.time("ParellPromise")
    const [res1, res2 ] = await Promise.all([
        delay(3000),
        delay(5000),
    ]) 
    // wait time is the max of both '
    console.log(res1, res2)
    console.timeEnd("ParellelPromise")
}


// SequentialPromise().then(() => ParallelPromise());



// Promose, on de;ay function add another argument , num 
// if num % 2 ==0 resolve after ms
// else reject after ms
// simulate (1000, 1500,2000, 2500)
// run this both parallel and sequentially
// catch the errror in parallel execution wioth Promise.allSettled
//  make a new function 
// log the resolved adn rejected values separately
// using npn-blocking .then, run 1000, 2000, 3000 sequentially

const simulate  = (ms, num)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (num % 2 ===0 ){
                resolve(`Resolved: ${num}`)
            }
            else{
                reject (`Rejected : ${num}`)

            }
        }, ms)
    })
}

const runSequentially = () =>{
    simulate (1000, 1500)
    .then(res => {
        console.log (res)
        return simulate (2000, 2500)
    })
    .then (res => console.log (res))
    .catch (err => console.log (err))
}
runSequentially()

const simulateSequential = async() =>{
    console.time("SimulateSequential")
    const res1 = await simulate(1000,1500, 2000, 2500)
    console.log(res1)
    console.timeEnd("SimulateSequential")

}
const simulateParallel = async() =>{
    console.time("SimulateParallel")
    const results = await Promise.allSettled ([
        simulate(1000, 1500),
        simulate(2000, 2000),
        simulate(3000, 2500),
    ])
    const resolvedValues = results

    .filter(result => result.status === "fulfilled")
    .map (result => result.value)
    const rejectedValues = results
    .filter(result => result.status === "rejected")

    .map (result => result.reason)
    console.log("Resolved Values:", resolvedValues)

    console.log("Rejected Values:", rejectedValues)
    console.timeEnd("SimulateParallel")
}
simulateSequential().then(() => simulateParallel());















