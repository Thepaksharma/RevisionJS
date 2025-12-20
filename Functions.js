//function created
function sum(p1, p2) { // function name(parameter1 , parameter2)
    return p1 + p2 //code to be executed
}

//calling a function
let total = sum(10, 25) //arguments
console.log(total)

let total1 = sum()
console.log(total1) //here will get NaN as no valid arguments are being passed here


//Arrow Functions 
//Introduces in ES6
//Allow us to write shorter function syntax

let myFunc2 = (a, b) => a + b
let sum2 = myFunc2(4, 52)
console.log(sum2)


/*
Local Variables
- Local variables can only be accessed from within the function.
- Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
- Local variables are created when a function starts, and deleted when the function is completed.
*/
function newFunc() {
    let var1 = "Value inside the function" //Only accessible inside a function
    console.log(var1)
}
// console.log(var1) //Not accessible outside of the function


//Parameters and Arguemnts 

function functioName(Parameter1, parameter2) { //parameters
    return Parameter1 + parameter2
}

let test = functioName(3, 5) //Arguments
console.log(test)


//Function used a variable
function variable2(a, b) {
    return a + b
}

let sum3 = variable2(4, 5)
console.log("Sum is " + sum3)
