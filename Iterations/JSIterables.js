
//looping over a String
const dataString = "Deepak"
for (let x of dataString) {
    console.log(x)
}

//looping over an Array
const arrayData = ["a", "b", "c"]
for (let x of arrayData) {
    console.log(x)
}

const arrayNumData = [1, 2, 3, 4, 5, 6]
for (let x of arrayNumData) {
    console.log(x)
}

//looping over a Set
const setData = new Set([1, 2, 2, 2, 3, 4, 5, 5, 6])
console.log(setData.size) //Doesnt count duplicates
for (let x of setData) {
    console.log(x)
}

//looping over a MAP
const mapData = new Map()
mapData.set("Name", "Deepak")
mapData.set("age", 20)
mapData.set("city", "Mumbai")
for (let x of mapData) {
    console.log(x)
}