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
console.log(cars.length) //Alwatys give 1 extra number
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
for(let value1 of cars5)
{
    console.log("USing enhanced for loop "+ value1)
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