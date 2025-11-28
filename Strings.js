const { log } = require("console")

var text = 'Its a very beautiful day here'

var text2 = " - here in Newcastle"

//To print any value
console.log(text)

// length
console.log(text.length)

// get the character by index position
let value = text.charAt(2)
console.log(value)
console.log("The value is "+ text.charAt(2))

// Concat two text variable values
console.log(text.concat(text2))

// CharCode method returns a UTF-16 code - Not much needed
console.log(text.charCodeAt(0))

// Codepoint value - not much needed
console.log(text.codePointAt(0))

// String at() - get the value with at method
// Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2)

let a = text.at(11)
console.log(a)


