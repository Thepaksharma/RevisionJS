const { Console } = require("console")


// A Map stores key–value pairs, like an object, but with more power.

// ✅ Why use Map instead of Object?
// Keys can be any type (object, function, number, string)
// Maintains insertion order
// Better performance for frequent add/remove


//Create a MAP and add values later using set
const expMap = new Map()
expMap.set("Sangharsh Nagar", "Shivsena - UBT")
expMap.set("Powai", "Shivsena - Shinde")
expMap.set("Kurla", "BJP")
console.log(expMap)

//Create a MAP and add an Array
const arrayMap = new Map([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

//Change MAP values using set
expMap.set("Kurla", "Congress")
console.log(expMap.get("Kurla"))

//get
console.log(expMap.get("Powai"))

//typeOf
console.log(typeof expMap)

//instanceOf
console.log(expMap instanceof Map)

