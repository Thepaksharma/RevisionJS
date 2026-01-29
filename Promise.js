const { rejects } = require("assert");
const { error, Console } = require("console");
const { resolve } = require("path");

// let myPromise = new Promise((resolve, reject) => {
//     console.log("Promise created, async task started...");

//     //step 2: Async task (2 Seconds delay)
//     setTimeout(() => {
//         let success = true;
//         if (success) {
//             resolve("Task completed successfully!") //Step 3 : Resolve called
//         } else {
//             reject("Task failed")   //Step 3 : Reject called
//         }
//     }, 2000)
// });


// //Step 4 : Attach then() and catch() to handle result
// myPromise
//     .then(result => {
//         console.log("Then:", result)
//     })
//     .catch(error => {
//         console.log("Catch:", error)
//     }
//     )

// console.log("This log runs BEFORE promise is resolved or rejected.");







let myPromise2 = new Promise((resolve, reject) => {
    console.log("Promise created") //Promise created

    //Async task 
    setTimeout(() => {
        let value = false;
        if (value) {
            resolve("Task completed successfully!") //Resolve call
        }
        else {
            reject("Task Rejected") //Reject call
        }
    }, 2000)
})

myPromise2
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

console.log("This is the shortest task to complete");



//Revision 29/01/2026

let myPromise3 = new Promise((resolve, reject) => {
    //Promise created

    //Logic with the wait
    setTimeout(() => {
        let value = true
        if (value) {
            resolve("This task is resolved .... Deepak")
        }
        else {
            reject("Sorry this task is rejected")
        }
    }, 2000)

})


myPromise3
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }
    )

