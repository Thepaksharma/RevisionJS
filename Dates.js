//Creating Date Objects

const date = new Date()
console.log(date)

const dateString = new Date("2025-12-28")
console.log(dateString)

const fullDate = new Date(2025, 11, 28, 15, 58, 10)
console.log(fullDate)

const tillMinutes = new Date(2025, 11, 28, 15, 59)
console.log(tillMinutes)

const tillHour = new Date(2025, 0, 28, 16)
console.log(tillHour)

const tillDate = new Date(2025, 1, 28)
console.log(tillDate)

const tillMonth = new Date(2025, 11)
console.log(tillMonth)

//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
const tillYear = new Date(2025)
console.log(tillYear)


//Previous Century - One and two digit years will be interpreted as 19xx:
const previousCentury = new Date(99, 11, 28)
console.log(previousCentury)

const previousCentury1 = new Date(9, 11, 28)
console.log(previousCentury1)


//new Date(milliseconds)
//new Date(milliseconds) creates a new date object as milliseconds plus zero time:
//Zero time is January 01, 1970 00:00:00 UTC.
//One day (24 hours) is 86 400 000 milliseconds.

const milli = new Date(100000000000)
console.log(milli)


//-----------------------------------------------------------------
//Displaying Dates
const displayDate = new Date(2025, 11, 28, 16, 15, 10, 100)
console.log(displayDate.toString())
console.log(displayDate.toDateString())
console.log(displayDate.toUTCString())
console.log(displayDate.toISOString())


//-----------------------------------------------------------------
//JavaScript Get Date Methods
//In JavaScript, date objects are created with new Date().
//new Date() returns a date object with the current date and time.

const dateGet = new Date()
console.log(dateGet)


// Method	          Description
// getFullYear()	  Get year as a four digit number (yyyy)
// getMonth()	      Get month as a number (0-11)
// getDate()	      Get day as a number (1-31)
// getDay()	          Get weekday as a number (0-6)
// getHours()	      Get hour (0-23)
// getMinutes()	      Get minute (0-59)
// getSeconds()	      Get second (0-59)
// getMilliseconds()  Get millisecond (0-999)
// getTime()	      Get time (milliseconds since January 1, 1970)

console.log(dateGet.getFullYear())
console.log(dateGet.getMonth())
console.log(dateGet.getDate())
console.log(dateGet.getHours())
console.log(dateGet.getMinutes())
console.log(dateGet.getSeconds())
console.log(dateGet.getMilliseconds())
console.log(dateGet.getTime())



//-----------------------------------------------------------------
//Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.


// Method	            Description
// setDate()	        Set the day as a number (1-31)
// setFullYear()	    Set the year (yyyy)
// setHours()	        Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	        Set the minutes (0-59)
// setMonth()	        Set the month (0-11)
// setSeconds()	        Set the seconds (0-59)
// setTime()	        Set the time (milliseconds since January 1, 1970)


const dateSet = new Date()
console.log(dateSet)

dateSet.setFullYear(2020)
console.log(dateSet)

dateSet.setMonth(10)
console.log(dateSet)

dateSet.setDate(20)
console.log(dateSet)

dateSet.setHours(5)
console.log(dateSet)

dateSet.setMinutes(15)
console.log(dateSet)

dateSet.setSeconds(30)
console.log(dateSet)

dateSet.setMilliseconds(123)
console.log(dateSet)



//Compare Dates
const todayDate = new Date()
const someDate = new Date()
someDate.setFullYear(2026)
console.log(someDate)
if (todayDate > someDate) {
    console.log("todayDate is greater than someDate")
}
else {
    console.log("Somedate is greater than todayDate")
}