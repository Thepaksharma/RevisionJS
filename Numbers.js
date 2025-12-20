const { parse } = require("path");

let num = 20;
let toStr = num.toString();
console.log(toStr)
console.log(typeof (toStr))


//toFixed() returns a string, with the number written with a specified number of decimals:
let decValue = 10.566356
console.log(decValue.toFixed(2)) //op : 10.56
console.log(decValue.toFixed(4)) //op : 10.5663
console.log(decValue.toFixed(6))


//toPrecision() returns a string, with a number written with a specified length:
let preNumber = 10.858797979
console.log(preNumber.toPrecision(3)) //op : 10.9
console.log(preNumber.toPrecision(4)) //op : 10.86

//parseInt() - parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
let parseValue = "100.56 "
console.log(parseInt(parseValue)) //op : 100
console.log(parseInt("year 100")) //op : NaN - Not a number

//parseFloat() - parses a string and returns a number. Spaces are allowed. Only the first number is returned:
let floatValue1 = "10.66"
console.log(parseFloat(floatValue1)) //op : 10.66
let floatValue2 = "10 10"
console.log(parseFloat(floatValue2)) //op : 10
let floatValue3 = "10 10.66 "
console.log(parseFloat(floatValue3)) //op : 10
let floatValue4 = "years 10"
console.log(parseFloat(floatValue4)) //op : NaN


console.log(Number.isInteger(10))
console.log(Number.isInteger(10.3))
console.log(Number.isFinite(123))
console.log(Number.isNaN(101))
console.log(Number.isSafeInteger(10))