//Different ways to create an array

//Single line
const cars = ["BMW", "Audi", "Mercedes", "Volvo"]
console.log(cars)

//Multi Line
const cars1 = [
    "BMW",
    "Volvo",
    "Audi"
]
console.log(cars1.toString())

//Create an empty array
const cars3 = []
cars3[0] = "BMW"
cars3[1] = "Audi"
cars3[2] = "Volvo"
console.log(cars3.toString())

//Create an array with keyword new
const cars4 = new Array("BMW", "Audi", "Volvo")
console.log(cars4.toString())


//Accessing an array element
console.log(cars4[0])

//Changing an Array element
cars4[0] = "Mercedes"
console.log(cars4[0])

console.log(typeof (cars4)) //Shows as an object
//Arrays use numbers to access its "elements"
//Objects use names to access its "members"


//Arrays properties and methods
console.log(cars.length) //Always gives 1 extra number
console.log(cars.sort()) //Sorts in alphbetical order

//The length property
const cars5 = ["BMW", "AUDI", "Volvo", "Jaguar", "Mercedes"]
console.log(cars5.length) //Finding length
console.log(cars5[0]) //Accessing first array element
console.log(cars5[cars5.length - 1]) //Accessing last array element


//loops in array
for (let i = 0; i < cars5.length; i++) {
    console.log("my car is " + cars5[i])
}

//Enhanced for loop
for (let value1 of cars5) {
    console.log("USing enhanced for loop " + value1)
}

//forEach()
let value;
cars5.forEach(myFunction)
function myFunction(value) {
    console.log('cars names ' + value)
}

//Adding Array element
cars5.push("TATA")
console.log(cars5)

//New element can also be added to an array using the length property:
cars5[cars5.length] = 'Mahindra'
console.log(cars5.toString())

//Adding elements with high indexes can create undefined "holes" in an array:
cars5[8] = "Tesla"
console.log(cars5)


//Associative arrays are not allowed in Array
// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// person.length;     // Will return 0
// person[0];         // Will return undefined


// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.

//Nested Arrays
const myObject = {
    name: "Deepak",
    City: "Newcastle",
    car: [
        { carName: "BMW", Colors: ["Red", "Blue", "Black"] },
        { carName: "Audi", Colors: ["Black", "White", "Yellow"] }
    ]
}

console.log(myObject.car[1].carName)



//JavaScript Methods
//length - The length property returns the length (size) of an array:
const fruits = ["Banana", "Mango", "Grapes", "Oranges"]
console.log(fruits.length)

//Setting the length of the array as 2
fruits.length = 2;
for (let fruit1 of fruits) {
    console.log("after setting the lemgth as 2 " + fruit1)
}

fruits.length = 3;
let fruit2;
fruits.forEach(fruitFunction)
function fruitFunction(fruit2) {
    console.log("After setting the length as 3 " + fruit2)
}

//Length helps us to add an array element in an array
fruits[fruits.length] = "Pineapple"

for (let fruitItem of fruits) {
    console.log(fruitItem)
}

const fruits2 = ["Mango", "Pineapple", "Banana", "Apple", "Strawberry"]

//toStriing() - The toString() method returns the elements of an array as a comma separated string.
console.log(fruits2.toString())

// Every JavaScript object has a toString() method.
// The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.


//---------------------------------------------------------
//at()
// The at() method returns an indexed element from an array.
// The at() method returns the same as [].
console.log(fruits2.at(2))
console.log(fruits2.at(-1))

// Note
// Many languages allow negative bracket indexing like [-1] to access elements from the end of an object / array / string.
// This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
// The at() method was introduced in ES2022 to solve this problem.

//---------------------------------------------------------
//join()
console.log(fruits2.join(" x "))

//pop() - The pop() method removes the last element from an array:
//The pop() method returns the value that was "popped out":
console.log(fruits2.pop())

//push() - The push() method adds a new element to an array (at the end):
//The push() method returns the new array length:
console.log(fruits2.push("Watermelon"))

//shift() - The shift() method removes the first array element and "shifts" all other elements to a lower index.
//The shift() method returns the value that was "shifted out"
console.log(fruits2.shift())

//unshift() - The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
//The unshift() method returns the new array length:
fruits2.unshift("Lemon")
console.log(fruits2.unshift("Pear"))

//Array.isArray() - Checks if its arrays or not  - returns boolean
console.log(Array.isArray(fruits2))

//delete() - Using delete() leaves undefined holes in the array.
//Use pop() or shift() instead.
delete fruits2[0]

for (let fruitValues of fruits2) {
    console.log(fruitValues)
}

//concat two arrays
const myBoys = ["Amit", "Jitu", "Sagar"]
const myGirls = ["Pavi", "Ravi", "Appu"]
const family = myBoys.concat(myGirls)
for (let fam of family) {
    console.log(fam)
}

//concat with multiple arrays
const myCity = ["Mumbai", "Newcastle", "Delhi"]
const details = myBoys.concat(myGirls, myCity)
for (let fullDetails of details) {
    console.log(fullDetails)
}

//concat with single string
const concatString = myBoys.concat("Conacting with a string")
for (let conString of concatString) {
    console.log(conString)
}

// Note 
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.
// The concat() method can also take strings as arguments:


//copyWithin() - The copyWithin() method copies array elements to another position in an array:

const fruits3 = ["Banana", "Mango", "Kiwi", "Pineapple", "Apple"]
console.log(fruits3)
fruits3.copyWithin(1, 3)
console.log(fruits3)
fruits3.copyWithin(0, 4)
console.log(fruits3)
fruits3.copyWithin(1, 0)
console.log(fruits3)

// Note
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.

//flat()
const myArr = [[1, 2], [3, 4], [5, 6]]
console.log(myArr.flat())


//Splice - The splice() method adds new items to an array.
const fruits4 = ["Mango", "Kiwi", "Banana", "Apple", "Pineapple"]
fruits4.splice(2, 0, "Honeydew")
console.log(fruits4)

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Honeydew") define the new elements to be added.

fruits4.splice(2, 3, "Grapes", "Strawberry")
console.log(fruits4)

//Using splice() to Remove Elements
fruits4.splice(0, 1)
console.log(fruits4)

fruits4.splice(0, 2)
console.log(fruits4)

const months = ["Jan", "Feb", "March", "April"]
console.log(months)
const splieMonth = months.toSpliced(0, 1)
console.log(months)
console.log(splieMonth)

// Note 
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.


//Slice() - The slice() method slices out a piece of an array into a new array:
const ukCities = ["Newcastle", "Manchester", "Birmingham", "London", "Glassgow"]
const myCities = ukCities.slice(1)
console.log(myCities)

//Note
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

const sortCity = ukCities.slice(1,3)
console.log(sortCity)

const sliceCity = ukCities.slice(3)
console.log(sliceCity)