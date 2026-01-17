const { copyFile } = require("fs")

//The new Map() Method
const newMAP = new Map()

//You can create a map by passing an array to the new Map() constructor:
const arraysMap = new Map(
    [
        ["apples", 500],
        ["Mango", 1000],
        ["Pineapple", 700]
    ]
)

//Map.get() - You get the value of a key in a map with the get() method
console.log(arraysMap.get("apples"))
console.log(arraysMap.get("Mango"))
console.log(arraysMap.get("Pineapple"))

//Map.set() - You can add and change elements to a map with the set() method:
const fruits = new Map()
fruits.set("Kiwi", 1000)
fruits.set("Guava", 2000)
fruits.set("Orange", 1500)
console.log(fruits)
console.log(fruits.get("Kiwi"))
fruits.set("Kiwi", 2000) //Updating the value 
console.log(fruits.get("Kiwi"))


//Map.size - The size property returns the number of elements in a map:
console.log(fruits.size)


//Map.delete() - The delete() method removes a map element:
console.log(fruits.get("Orange"))
fruits.delete("Orange")
console.log(fruits.get("Orange")) //This will return undefined as values has been deleted


//Map.clear() - The clear() method removes all the elements from a map:
console.log(fruits)
fruits.clear()
console.log(fruits)


//Map.has() - The has() method returns true if a key exists in a map:
const tryMap = new Map()
tryMap.set("Sony", 1200)
tryMap.set("Canon", 1000)
tryMap.set("Fuji", 1200)
tryMap.set("hasselblad", 700)
console.log(tryMap)
console.log(tryMap.has("Canon"))
tryMap.delete("Fuji")
console.log(tryMap.has("Fuji"))


//Map.forEach() - The forEach() method invokes a callback for each key/value pair in a map:
const companies = new Map()
companies.set("TCS", 25)
companies.set("Google", 14)
companies.set("OpenAI", 58)
companies.set("DLF", 54)
companies.set("Adani", 150)
console.log(companies)
console.log(companies.size)

//👉 Order is ALWAYS: value, key, map

companies.forEach((value, key) => console.log(key, value))


//Map.entries() - Always go with for ..of - We are storing key:Value directly in x
for (const x of companies.entries()) {
    console.log(x)
}

//lets destucture the key:Value
for (const [key, value] of companies.entries()) {
    console.log(key, value)
}

companies.forEach((value, key) => console.log(key, value))


//Map..keys() - Using for ..of
for (const x of companies.keys()) {
    console.log(x)
}


//Map.values() - for ..of
for (const x of companies.values()) {
    console.log(x)
}


//Objects as Keys
const obj1 = { name: "Deepak" }
const obj2 = { name: "Jitu" }
const obj3 = { name: "Amit" }
const obj4 = { name: "Sunil" }
const data = new Map()
data.set(obj1, 500)
data.set(obj2, 600)
data.set(obj3, 700)
data.set(obj4, 800)
console.log(data.get(obj1))


//Map.groupBy()
//Array creation
// const fruit1 = [
//     { name: "Banana", Quantity: 1500 },
//     { name: "Apple", Quantity: 500 },
//     { name: "Orange", Quantity: 1200 },
//     { name: "Pineapple", Quantity: 1520 }
// ]

// function myFunction({ Quantity }) {
//     return Quantity > 600 ? "High" : "Low"
// }

// //GroupBy
// const results = Map.groupBy(fruit1, myFunction)
// console.log(results)



//----------------------------------------------------------------

//Revision
//New MAP
const revMap = new Map()

//To add and Changes Values use Set()
revMap.set("name", "Deepak")
revMap.set("Age", 29)
revMap.set("City", "Mumbai")
revMap.set("Nationality", "India")
console.log(revMap)
revMap.set("name", "Deepak Sharma")
console.log(revMap)

//Map.get()
console.log(revMap.get("City"))

//Map.size - this is property
console.log(revMap.size)
revMap.delete("name")
console.log(revMap)

//Map.clear()
revMap.clear()
console.log(revMap)

//Map.has()
const rev2 = new Map()
rev2.set("First class", 52)
rev2.set("Second Class", 45)
rev2.set("Third Class", 84)
rev2.set("Fourth class", 40)
console.log(rev2)
console.log(rev2.has("Third Class"))


//forEach()
rev2.forEach((value, key) => console.log(key, value))

//Map.entries() - for ..of
//Structured
for (let x of rev2.entries()) {
    console.log(x)
}

//Desturctured
for (let [key, value] of rev2) {
    console.log(key, value)
}

//Map.keys() - for ..of
for (let x of rev2.keys()) {
    console.log(x)
}

//Map.values() - for ..of
for (let x of rev2.values()) {
    console.log(x)
}

//Objects as keys
const obj = new Map()
const cust1 = { name: "Deepak", Role: "Tester" }
const cust2 = { name: "Jitu", Role: "Developer" }
const cust3 = { name: "Amit", Role: "Devops" }
obj.set(cust1, 1500)
obj.set(cust2, 2000)
obj.set(cust3, 3000)
console.log(obj)



