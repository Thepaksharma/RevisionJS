//WeakSet allows the Garbage Collector to remove unused objects, while Set keeps them alive.

const wSet = new WeakSet();
let obj1 = { name: "Deepak", age: 29 }
wSet.add(obj1)

//Why does it look empty?
// Because WeakSet is not iterable.
// JavaScript intentionally hides its contents so that the Garbage Collector can remove items at any time.

console.log(wSet.has(obj1))
obj1 = null; // JS throws it away - Only possible in WeakSet but not possible in Set - Garbage collector removes the unused value here - Prevents memory leak
console.log(wSet.has(obj1))

/*
Think of memory like a table

Your computer has a table.
Every object you create sits on that table.

When you don’t need something anymore, JavaScript should throw it away.

What is a memory leak?

A memory leak means:

Something is no longer needed,
but JavaScript is not allowed to throw it away
because your code is still holding it.

So the table keeps filling up…
even though old things should be gone.

Real-life example 🧃

You drink a juice.

Normally:
You throw the empty bottle in the dustbin.

Memory leak:
You keep holding the empty bottle forever.

After 100 juices, your hands are full → you can’t move → system slows or crashes.



Why WeakSet is weird
WeakSet has huge limitations:

Feature	            Set	            WeakSet
Store primitives	Yes	            ❌ No (only objects)
Iterate	            Yes (for..of)	❌ No
Size	            Yes	            ❌ No
Clear	            Yes	            ❌ No
Keys enumerable	    Yes	            ❌ Hidden

This is intentional — otherwise the garbage collector couldn’t work.
*/