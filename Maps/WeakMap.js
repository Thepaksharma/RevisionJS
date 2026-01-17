//JavaScript WeakMAP

// A JavaScript WeakMap is a collection of key/value pairs where the keys must be objects.
// A WeakMap holds weak references to its keys.

const wMap = new WeakMap() //WeakMAP
let value = { name: "Deepak", Age: 29 } //Object
wMap.set(value, 2000)
console.log(wMap) //Does not display the value
console.log(wMap.has(value))
value = null
console.log(wMap.has(value)) //Value has been removed from wekMAP - Thats the positive point of habing a wekmap which prevents Memory leak