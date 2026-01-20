//next()
//In JavaScript, next() is mainly used with iterators and generators. It moves the iterator to the next value.

// 1️⃣ next() with Iterators
// An iterator returns an object with two properties:
// value → current value
// done → true when iteration is finished

const arr = [1, 2, 3, 4, 5, 6]
const iterator = arr[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())



// for ..of 
// for...of depends on next() because it internally calls next() again and again until done === true.
// You never see next(), but JavaScript uses it under the hood.

for (let value of arr) {
    console.log(value)
}


// 4️⃣ When to use what?
// ✅ Use for...of (99% of the time)
// Arrays
// Strings
// Maps
// Sets
// Clean & readable code

// ✅ Use next() (advanced / rare)
// Custom iterators
// Libraries
// Learning JS internals
// Generator control


//iterator.from() - Its very similar to arr[symbol.ierator]() - This is not supported in current node version
// const arr1 = [1, 2, 3, 4, 5, 6]
// const iterator1 = Iterator.from(arr1)
// console.log(iterator1.next())
// console.log(typeof iterator.from)


// Iterable vs Iterator (Simple Version)
// Thing	  What it is	                          Example	                    You use it for
// Iterable	  Something you can loop over	      Array, Set, String	        for...of loops
// Iterator	  The thing that gives you values	  arr[Symbol.iterator](), 	    .next() manually
//            one by one                          set.values()


// Quick Comparison Table
// Feature	                arr[Symbol.iterator]()	        Iterator.from()
// Works on	                Only iterables	                Iterables or existing iterators
// Syntax	                [Symbol.iterator]()	            Iterator.from(...)
// Returns	                Iterator	                    Iterator
// Manual control	        ✅	                           ✅
// Use case	                Old-school, traditional	        Modern, flexible, cleaner



// Global rules
// Thing	    Methods / Behavior
// Array       .filter(), .map(), .forEach(), .reduce(), etc.
// Iterator    .next() only
// for...of     Works on any iterable or iterator


//filter()
const number = [10, 12, 14, 25, 35, 47, 56]
const graterNum = number.filter(x => x > 20)
const iteratorLarge = graterNum[Symbol.iterator]()
console.log(iteratorLarge.next())
console.log(iteratorLarge.next())


