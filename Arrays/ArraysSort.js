const names = ["Deepak", "Jitu", "Sunil", "Amit", "Ravi", "Gaurav", "Sagar", "Krishna", "Dinesh"]

// Sorting an Array
// The sort() method sorts an array alphabetically:
console.log(names.sort().toString())

// Reversing an Array
// The reverse() method reverses the elements in an array:
console.log(names.reverse())

//toSorted()
// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.
// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
let sorted = names.toSorted()
console.log(sorted)

//toReversed()
// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.
// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
let reversed = names.toReversed()
console.log("Value is " + reversed)


//Sorting numbers
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

const numbers = [25, 84, 14, 57, 15, 5, 85, 1, 15]
console.log(numbers.sort(function (a, b) { return a - b }))
console.log(numbers.sort(function (a, b) {return b - a }))