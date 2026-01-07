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

const sortCity = ukCities.slice(1, 3)
console.log(sortCity)

const sliceCity = ukCities.slice(3)
console.log(sliceCity)



//Revision - Arrays Methods
const rev = ["UK", "USA", "INDIA", "CHINA", "RUSSIA"]
console.log(rev.length)
console.log(rev.toString())
console.log(rev.at(2))
console.log(rev.join(" x "))
console.log(rev.pop()) //Returns deleted from last place
console.log(rev.push("RUSSIA")) //Returns length
console.log(rev.shift("Afganistan")) //Removes frist element
console.log(rev.unshift("UK"))
console.log(Array.isArray(rev))
// delete rev[1]  //Delete leaves holes in the Array
console.log(rev)
const rev2 = ["Mumbai", "Chennai", 'Bangalore', "Delhi"]
const revFull = rev.concat(rev2)
console.log(revFull.toString())
console.log(revFull.copyWithin(1, 5, 6).toString())
const revFlat = [[1, 2], [3, 4], [5, 6, 7], [8]]
console.log(revFlat.flat())
console.log(revFull.toString())
console.log(revFull.slice(2))
revFull.splice(1, 0, "Ahemdabad") //alters the same array
console.log(revFull.toString())
console.log(revFull.toSpliced(1, 0, "Jaipur")) //toSpliced creates a new array without touching the older array
console.log(revFull.toString())
//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.


//Array Search Methods
const searchValue = ["Amit", "Jitu", "Sunil", "Krishna", "Dinesh", "Amit", NaN]
console.log(searchValue.toString())

//indexOf() - returns the position of the first occurrence of the specified element.
console.log(searchValue.lastIndexOf("Amit"))
console.log(searchValue.indexOf("Amit"))
console.log(searchValue.indexOf()) //Array.indexOf() returns -1 if the item is not found.
console.log(searchValue.indexOf("Amit")) //If the item is present more than once, it returns the position of the first occurrence.

//lastIndexOf() - Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
console.log(searchValue.lastIndexOf("Amit"))
console.log(searchValue.lastIndexOf())

//includes() - Array.includes() allows to check for NaN values. Unlike Array.indexOf().
console.log(searchValue.includes("Amit"))
console.log(searchValue.includes(NaN))

//find()
// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of) the first element that is larger than 18:
const numFind = [22, 45, 1, 8, 19, 15, 47, 20]

let result = numFind.find(findFunction)
function findFunction(value) {
    return value < 18
}
console.log(result)



const findRes = value => value < 18
let result2 = numFind.find(findRes)
console.log(result2)


//findIndex() - The findIndex() method returns the index of the first array element that passes a test function.
let resFindIndex = numFind.findIndex(indexFunction)
function indexFunction(value) {
    return value < 30
}
console.log(resFindIndex)

//findLast() - ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
let resFindLast = numFind.findLast(findLastFunction)
function findLastFunction(value) {
    return value < 18
}
console.log("last index is " + resFindLast)


let resForFindLast = value => value < 18
console.log(numFind.findLast(resForFindLast))

//findLastIndex() - The findLastIndex() method finds the index of the last element that satisfies a condition.
const resFindLastIndex = value => value < 18
console.log(numFind.findLastIndex(resFindLastIndex))

