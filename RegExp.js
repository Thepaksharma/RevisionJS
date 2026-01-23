// Regular Expressions
// A Regular Expression is a sequence of characters that forms a search pattern.
// Regex is a common shorthand for a regular expression.
// JavaScript RegExp is an Object for handling Regular Expressions.

// RegExp are be used for:
// Text searching
// Text replacing
// Text validation


// 🔹 What you should do instead of memorizing
// Understand the logic behind patterns
// \d → any digit (0–9)
// \w → letters, numbers, underscore
// + → one or more
// * → zero or more
// ^ → start of string, $ → end of string
// ? → optional
// . → any character
// Once you understand these building blocks, you can read or tweak any RegExp without memorizing it.

//Email
// Pattern: /^\w+@\w+\.\w+$/
// Email : deepak@gmail.com
const email = "deepak_sharma@gmail.com"
const emailPattern = /^\w+@\w+\.\w+$/
if (emailPattern.test(email)) {
    console.log("Email is valid")
}
else {
    console.log("Its an invalid email")
}


//Phone Number
//Pattern : /^\d{10}$/
//Phone Number = 86525458655

const phoneNum = 8612345687
const PhoneNumPattern = /^\d{10}$/
if (PhoneNumPattern.test(phoneNum)) {
    console.log("Phone number is valid")
}
else {
    console.log("Phone number is invalid")
}