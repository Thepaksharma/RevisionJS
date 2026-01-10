// Array iteration simply means
// 👉 going through each element of an array one by one.

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
const numeric = [2, 45, 1, 34, 7, 25]
const mapNumeric = numeric.map(value => value * 2)
console.log(mapNumeric.toString())

//flatMap() - flat(Converting a nested array (array inside array) into a single-level array.) + MAp (Create a new Arrays by referring to an exisiting array)
const flatNumeric = [[1, 2], [3, 4], [5, 6]]
const flatMapNumeric = flatNumeric.flatMap(value => value)
console.log(flatMapNumeric)



