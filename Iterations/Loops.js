//For loop
// The for loop is used when the number of iterations is known.
// It consists of an initialization (exp1), a condition (exp2), and an increment expression (exp3).

// exp1 is executed one time before the execution of the code block.
// exp2 defines the condition for executing the code block.
// exp3 is executed every time a code block has been executed.

for (let i = 0; i < 5; i++) {
    console.log("For loop " + i)
}


//While loop
//The while loop executes a block of code as long as a specified condition evaluates to true.
let i = 0
while (i < 5) {
    console.log("While loop " + i)
    i++
}

//do ..while loop
//The do...while loop is similar to the while loop, but guarantees that the code block will be executed at least once, before the condition is checked.
//The example below uses a do...while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
let j = 0
do {
    console.log("Do While loop " + j)
    j++
} while (j < 5)


//The for ..in loop
//The for...in loop iterates over the enumerable properties of an object.
//It is typically used for iterating over object keys.

const person = {
    name: "Deepak",
    age: 30,
    city: "Mumbai"
}
for (let x in person) {
    console.log(x)
}


//For ..of
// Iterating means looping over a sequence of elements.
// Here are some examples:
// Iterating over a String
// Iterating over an Array
// Iterating over a Set
// Iterating over a Map


//looping over a String
const dataString = "Deepak"
for (let x of dataString) {
    console.log(x)
}

//looping over an Array
const arrayData = ["a", "b", "c"]
for (let x of arrayData) {
    console.log(x)
}

const arrayNumData = [1, 2, 3, 4, 5, 6]
for (let x of arrayNumData) {
    console.log(x)
}

//looping over a Set
const setData = new Set([1, 2, 2, 2, 3, 4, 5, 5, 6])
console.log(setData.size) //Doesnt count duplicates
for (let x of setData) {
    console.log(x)
}

//looping over a MAP
const mapData = new Map()
mapData.set("Name", "Deepak")
mapData.set("age", 20)
mapData.set("city", "Mumbai")
for (let x of mapData) {
    console.log(x)
}