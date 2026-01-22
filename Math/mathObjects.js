// JavaScript Math Objects
//The JS Math object allows you to perform mathematical tasks.
//The match object is static
//All methods and properties can be used without creating a Math object first

//Math.random() - Get random numbers
//Genrated a random decimal number between 0 (inclusive) and 1 (Exclusive)
console.log(Math.random())
const email = "Deepak" + Math.random() + "@gmail.com"
console.log(email)


//Math.floor() - Remove decimals, round down
//Removes the decimal and gives the smaller whole number
console.log(Math.floor(5.9))
console.log(Math.floor(0.1))

//Now i am trying to create a new email id with random numbers withou decimal and having said that numbers should be between 0 to 999
const email1 = "Deepak" + Math.floor(Math.random() * 1000) + "@gmailcom"
console.log(email1)


//Math.round() - Normal rounding
//0.5 or more - Round up
//less than 0.5 - round down
console.log(Math.round(4.7)) //Round up
console.log(Math.round(3.1)) //Round down
console.log(Math.round(3.5)) //Round up


//Math.ceil() - Always round up
//Rounds up to the next whole number, no matter what
console.log(Math.ceil(4.1)) //Round up
console.log(Math.ceil(4.5)) //Round up
console.log(Math.ceil(3.8)) //Round up


//Math.max() - Get the largest number
//Returns the highest number from the list
console.log(Math.max(52, 45, 78, 95, 52, 62, 52))


//Math.min() - Get the smallest number
//Returns teh smallest number from the list
console.log(Math.min(54, 584, 54, 6, 66, 16, 16461, 62, 2, 12))


//Math.abs() - Make negative numbers positive
//Turns negative numbers into postive
console.log(Math.abs(-5))