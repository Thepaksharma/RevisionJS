const { log } = require("console")
const { subscribe } = require("diagnostics_channel")

var text = 'Its a very beautiful day here'

var text2 = " - here in Newcastle"

//To print any value
console.log(text)

// length
console.log(text.length)

//-------------------------
// charAt() - get the character by index position
let value = text.charAt(2)
console.log(value)
console.log("The value is " + text.charAt(2))


//-------------------------
//at() - get the character by index value - Note : at() allows the use of negative indexes while charAt() do not
let x = "Hey it's deepak"
console.log(x)
console.log("Using at here and the third position character is" + x.at(2))


//-------------------------
//Property Access
console.log("Property access is used in arrays mostly " + text[1])


//-------------------------
// Concat two text variable values
console.log(text.concat(text2))


//-------------------------
/*Extracting String Parts
1. Slice(start, end) 
2. subString(start, end)
*/

//slice(start, end) - extracts a part of a string and returns the extracted part in a new string
let store1 = "Longbenton it's a very good place in the Newcastle upon tyne"
console.log(store1.slice(1, 9)) //keeps starting value but doesnt keep ending one
console.log(store1.slice(1)) // If you omit the second parameter, the method will slice out the rest of the string
console.log(store1.slice(-2)) //If a parameter is negative, the position is counted from the end of the string


//subString - substring() is similar to slice()
//The difference is that start and end values less than 0 are treated as 0 in substring()
console.log(store1.substring(1, 9))
console.log(store1.substring(1))
console.log(store1.substring(-2))

//-------------------------
//Converting to Upper and Lower Case
console.log(store1.toUpperCase())
console.log(store1.toLowerCase())

//-------------------------
//wellFormed
// 1. isWellFormed - The isWellFormed() method returns true if a string is well formed.
console.log(store1.isWellFormed())

//2. toWellFormed - The String method toWellFormed() returns a new string where all "lone surrogates" are replaced with the Unicode replacement character (U+FFFD).
let wellStore = "Its a Great day today \uD800"
console.log(wellStore.toWellFormed()) 


//-------------------------
//String Trim
let trimValue = "     This is for a trim      "
console.log(trimValue.trim())
console.log(trimValue.trimStart())
console.log(trimValue.trimEnd())


//-------------------------
// String Padding - Add value with an exisiting string
let padValue = "Deepak"
console.log(padValue.padStart(12,"0"))
console.log(padValue.padEnd(12,"0"))


//-------------------------
// String Repeat - Repeats the value
let repeatValue = "Repeat"
console.log(repeatValue.repeat(2))

//-------------------------
// String Replace
let replaceValue = "It is winter in the UK, and due to the winter season, the temperature drops very quickly."
console.log(replaceValue.replace("winter","thandi")) // replaces only the first match
// Regular expressions are written without quotes.
console.log(replaceValue.replace(/winter/g,"thandi")) //To replace all matches, use a regular expression with a /g flag (global match)
console.log(replaceValue.replace("WINTER","thandi")) //replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work
//Regular expressions are written without quotes.
console.log(replaceValue.replace(/WINTER/i,"Thandi")) //To replace case insensitive, use a regular expression with an /i flag (insensitive)


//String ReplaceAll
let store3 = "I love cats. Cats are very easy to love. Cats are very popular"
console.log(store3.replaceAll(/cats/g,"dogs"))
console.log(store3.replaceAll(/Cats/g,"Dogs"))


//String split
let store4 = "Hey its deepak sharma - Todays date is 14 December 2025"
console.log(store4.split("-")) //Arrays with two elements
console.log(store4.split()) // returned array will contain the whole string in index [0]
console.log(store4.split("",)) //the returned array will be an array of single characters


// String Search Methods
// String indexOf() -The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let store5 = "It’s the year 2025 and a lovely December of the year."
console.log(store5.indexOf('l')) 

// String lastIndexOf() - returns the index of the last occurrence of a specified text in a string:
console.log(store5.lastIndexOf("e"))
console.log(store5.lastIndexOf("x")) //Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// Both methods accept a second parameter as the starting position for the search:
console.log(store5.indexOf("year",14))
console.log(store5.lastIndexOf("year",15))


//* String search - searches a string for a string (or a regular expression) and returns the position of the match:
console.log(store5.search("year")) 
console.log(store5.search(/lovely/))

// NOTE
/*
The two methods are NOT equal. These are the differences:
- The search() method cannot take a second start position argument.
- The indexOf() method cannot take powerful search values (regular expressions).
*/


//String match - returns an array containing the results of matching a string against a string (or a regular expression).
console.log(store5.match("year"))
console.log(store5.match(/year/g))
console.log(store5.match(/Year/gi))

// String matchAll() - returns an iterator containing the results of matching a string against a string (or a regular expression).
for(const match of store5.matchAll(/year/g))
{
    console.log(match)
}


//String includes - returns true if a string contains a specified value.
console.log(store5.includes("year"))
console.log(store5.includes("year",10))


// String startsWith()
console.log(store5.startsWith("It"))

//String endsWith()
console.log(store5.endsWith("."))

