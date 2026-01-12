// JavaScript Set
// A Set in JavaScript is a data structure that stores unique values. (A JavaScript Set is a collection of unique values.)
// This means duplicate values are not allowed.
// This is especially useful in automation and testing when you want to remove duplicates, validate unique test data, or track distinct values.

const { setegid } = require("process")

// How to Create a Set
// You can create a JavaScript Set by:

// - Passing an array to new Set()
// - Create an empty set and use add() to add values

//Create and pass the values at the same time
const setExp1 = new Set([1, 2, 2, 2, 3, 4, 5, 6, 7])
console.log(setExp1)
console.log("The set has " + setExp1.size + " values")

//Creating an empty Set and addig values to it later
const setExp = new Set()
setExp.add(1)
setExp.add(2)
setExp.add(4)
setExp.add(3)
console.log(setExp)
console.log("The set has " + setExp.size + " values")



//Listing the values - Only for...of and forEach() loop can be used
//Its iterable but not indexable so cant use the normal for loop here
//for...of
for (let setValue of setExp) {
    console.log(setValue)
}

//forEach()
setExp.forEach(value => console.log("The set has " + value))



//Sets are Objects
console.log(typeof setExp)

console.log(setExp instanceof Set)