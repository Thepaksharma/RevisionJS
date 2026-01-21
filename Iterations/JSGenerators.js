//Generators 

const arr = [1, 2, 3]

//Using an Iterator Manually
const iterator = arr[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//for ..of 
//Intrnallly does below steps 
//arr[symbol.iterator]() - Iterable -> Iterator
//next() - Iterator -> Value
for (let value of arr) {
    console.log(value)
}

//Generator using for ..of
function* genFromArray(arr) {
    for (let value of arr) {
        yield value //logic created here
    }
}
const genItr = genFromArray(arr)
console.log(genItr.next())
console.log(genItr.next())
console.log(genItr.next())
console.log(genItr.next())


/*
🔹 Iterator
Iterator is a low-level, manual mechanism
It only knows how to move forward
It exposes .next()
It does NOT contain business logic by itself
Any logic must be written outside or manually inside

it.next(); // get next value

Think of it as:
“Give me the next value” machine


🔹 Generator
Generator is a function that CREATES an iterator
It can:
iterate
filter
transform
pause / resume
control flow
Uses normal function logic
Uses yield to emit values

JS handles iterator mechanics automatically

function* gen() {
  // logic
  yield value;
}

Think of it as:
“Smart iterator written as a function
*/

//Generator created
function* calculateArrays(arr) {
    for (let value of arr) {
        yield value * 2
    }
}

//Iterator created
const calItr = calculateArrays(arr)
console.log(calItr.next())
console.log(calItr.next())
console.log(calItr.next())
console.log(calItr.next())