// JavaScript Set Methods
//Basic Set Methods

//1. new Set() Method - Pass an array to the new Set() constructor:
const setExp1 = new Set(["Deepak", "Deepak", "Jitu", "Amit", "Amit"])
setExp1.forEach(value => console.log(value))
console.log("The set has " + setExp1.size + " values")

//2. add() Method
setExp1.add("Shobit")
setExp1.add("Pratik")
setExp1.add("Pratik")
for (let value of setExp1) {
    console.log(value)
}

// Note
// The primary feature of Set objects is that they only store unique values.
// If an attempt is made to add an element that already exists in the set, the add() method will have no effect, and the set will remain unchanged.

// The size Property
console.log(setExp1.size)


// Listing elements using for..of or for each loop - can be seen in above examples

//has() Method - The has() method returns true if a specified value exists in a set.
console.log(setExp1.has("Deepak")) //Returns boolen



//Values() Method
// Haha exactly Deepak 😄 — that’s a really good way to think about it!
// Yes, you can imagine it like this:
// values() is giving the iterator a “license” or “permission” to access all the items in the Set (or Map).
// The iterator then goes through the items one by one, using .next() or a loop.
// The Set itself does not give direct access to items by index (like an array), it only allows the iterator to see them.


const iterator = setExp1.values()
// for (let value of iterator) {
//     console.log(value)
// }

//What is an Iterator in JavaScript? - Only for..of allowed
// An iterator is like a pointer or tool that lets you go through a collection (Array, Set, Map, etc.) one by one.
// Think of it as a remote control for your data — you can move from one item to the next

console.log(iterator.next());
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


//Keys()
const iterator2 = setExp1.keys();
for (let value of iterator2) {
    console.log(value)
}
console.log(iterator)
// [Set Iterator] {  }
// The console shows the type of object → [Set Iterator]
// The { } is empty because iterators don’t store values like arrays.
// The iterator just has a pointer to the Set’s values, and it will give them when you call .next().


// Why the { } looks empty
// An iterator is not an array.
// It does not actually store all the values inside itself.
// Instead, it just remembers where it is in the Set (or Map, or other collection) and can give you the next value when you ask.
// Think of it like a bookmark:
// You have a book (Set with values [10, 20, 30]).
// The iterator is a bookmark that points to the current page.
// The bookmark doesn’t contain the pages itself, it just points to them.
// When you ask .next(), it reads the page and moves forward.


// Data Structure	    keys()	            values()
// Set	                Same as values	    All values
// Map	                Only keys	        Only values


//Entries()
// The entries() method is supposed to return a [key,value] pair from an object.
// A Set has no keys, so the entries() method returns [value,value].
// This makes Sets compatible with Maps.

const iterator3 = setExp1.entries()
console.log(iterator3)
for (let value of iterator3) {
    console.log(value)
}

