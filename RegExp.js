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


//Extract numbers from string
//Goal : Get dynamic numbers(like order id's) from text
//^\d+$ → matches only if the whole string is digits. Fails if there’s any text.
// \d+ → matches any digits anywhere in the string. Works even if there’s other text.


const orderMSG = "Deepak you order id is 5465455"
const numbers = orderMSG.match(/\d+/)
console.log(numbers[0])

const multipleNum = "Deepak your orderid is 31351 and postcode is NE128RR"
const numbers1 = multipleNum.match(/\d+/g)
const allNumbers = numbers1
console.log(allNumbers[1])


//Only Letters [User name validation]
const nameValue = "DeepakDayaramSharma" //Value
const pattern = /^[A-Za-z]+$/ //Pattern
if (pattern.test(nameValue)) {
    console.log("USer name is valid")
}
else {
    //Response will be invalid even if you have a space
    console.log("User name is invalid")
}


//Contains word(Flexible Check)
//Goal : Check if the text contains a specific word, ignoring case
//Regex pattern: /deepak/i
//deepak : the word to match
//i : to ignore the case

const word = "The world is really beautiful"
const wordPattern = /Beautiful/i
if (wordPattern.test(word)) {
    console.log("Message contains your word")
} else {
    console.log("Message doesnt contain word")
}


//.*
//. → any single character (letter, number, symbol)
// * → zero or more times → repeats the .
// Together .* → matches any sequence of characters, including empty string
// abc → literally matches the substring abc at the end

const value = "a123a123b1abcabc"
const valuePattern = /.*abc/
if (valuePattern.test(value)) {
    console.log("Matched")
} else {
    console.log("Unmached")
}


const password = "Deepak12345"
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,12}$/
if (passwordPattern.test(password)) {
    console.log("Password Matched")
}
else {
    console.log("Password doest match")
}


//Date validation(yyyy-mm-dd)
const date = "2026-01-24"
const datePattern = /^\d{4}-\d{2}-\d{2}$/
if (datePattern.test(date)) {
    console.log("Date Matched")
} else {
    console.log("Date is not matching")
}


//Decimal Number Validation
const decimal = 125.123
const decimalPattern = /^\d+(\.\d+)$/
if (decimalPattern.test(decimal)) {
    console.log("Decimal is accurate")
} else {
    console.log("Decimal is not correct")
}


//Flexible Number in Text
const messgae1 = "Order ID :  135121"
const messgae1Pattern = /Order ID :  \d+/
if (messgae1Pattern.test(messgae1)) {
    console.log("Order is present")
} else {
    console.log("Order id is not present")
}

const number2 = messgae1.match(/\d+/)
console.log(number2[0])


