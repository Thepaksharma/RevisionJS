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



//ArraySearch Revision
const revSearch = [2, 4, 5, 9, 8, 41, 52, 56, 12, NaN, 14, 19, 4, 16]
console.log(revSearch.indexOf(4))
console.log(revSearch.lastIndexOf(4))
console.log(revSearch.includes(9))
console.log(revSearch.includes(NaN))


console.log(revSearch.find(serachFunction))
function serachFunction(value) {
    return value < 18
}


//findIndex() - Using function expression or arrow fucntion
const resFun = value => value < 18
console.log(revSearch.findIndex(resFun))


//findlast() - Using functiojn expression or Arrow function
const resfun2 = value => value < 18
console.log(revSearch.findLast(resfun2))


//findLastIndex() 
const resfun3 = value => value < 18
console.log(revSearch.findLastIndex(resfun3))