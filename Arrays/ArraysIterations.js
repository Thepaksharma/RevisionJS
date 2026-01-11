// Array iteration simply means
// 👉 going through each element of an array one by one.

const { totalmem } = require("os")

const fruits = ["Banana", "Mango", "Stawberry", "Apple", "Orange"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

//Enhanced for loop
for (let fruit of fruits) {
    console.log(fruit)
}

//forEach()
fruits.forEach(fruitFunction)
function fruitFunction(fruitEach) {
    console.log(fruitEach)
}

//Advanced for each
fruits.forEach(fruitEach => console.log(fruitEach))


//Map() - map() is one of the most important array methods in JavaScript.
// It creates a new array by transforming each element of an existing array.
const numeric = [2, 45, 10, 34, 7, 25]
const mapNumeric = numeric.map(value => value * 2)
console.log(mapNumeric.toString())

//flatMap() - flat(Converting a nested array (array inside array) into a single-level array.) + MAp (Create a new Arrays by referring to an exisiting array)
const flatNumeric = [[1, 2], [3, 4], [5, 6]]
const flatMapNumeric = flatNumeric.flatMap(value => value)
console.log(flatMapNumeric)


//filter() - The filter() method creates a new array with array elements that pass a test
let filterArrays = numeric.filter(value => value < 18)
console.log(filterArrays)

//reduce() - Left to Right -  The reduce() method runs a function on each array element to produce a single value.
let reduceArrays = numeric.reduce((total, value) => total + value)
console.log(reduceArrays)

//reduceRight - Right to left -  The reduceRight() method runs a function on each array element to produce a single value.
let reduceRightArrays = numeric.reduceRight((total, value) => total + value)
console.log(reduceRightArrays)

//every() -  The reduce() method runs a function on each array element to produce a single value.
let everyArrays = numeric.every(value => value > 1)
console.log(everyArrays)

//some() - The some() method checks if some array values pass a test.
let someArrays = numeric.some(value => value > 10)
console.log(someArrays)

//Arrays.from() - creates an arrays 
let text = "ABCDEFG"
console.log(Array.from(text))

//keys() - The Array.keys() method returns an Array Iterator object with the keys of an array.
const keys = numeric.keys()
for (let key of keys) {
    console.log(key)
}

//entires()
const entriesArrays = numeric.entries()
for (let entry of entriesArrays) {
    console.log(entry.join(" = "))
}

//Arrays with()
const months = ["January", "February", "Mar", "April"]
let correctedMonth = months.with(2, "March")
console.log(correctedMonth) // NEw changes can be seen in new array
console.log(months) //Original arrays remains unchanged 

//Spread Operator
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)