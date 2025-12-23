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


/*Local Variables
- Local variables can only be accessed from within the function.
- Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
- Local variables are created when a function starts, and deleted when the function is completed.*/

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



//default parameter - If no arguements are provided then we can set some default values inside the function
function functionName2(p1, p2) {
    if (p1 == undefined && p2 == undefined) { //defining default parameters
        p1 = 4
        p2 = 6
    }
    return p1 + p2
}
let addition = functionName2() //As no arguments are being provided
console.log(addition)



//Anonymous Function or Fucntion Expressions 
/*A function expression is a function assigned to a variable.
A function expression is a way of defining a function within an expression, rather than as a standalone declaration.
A function expression can be assigned to a variable, passed as an argument to another function, or returned from a function.*/

const x = function (a, b) { return a + b }; //Assigned to  variable 
let z = x(4, 6) //Using variable as a function
console.log(z)


//Arrow Function Expression
//Arrow Functions allow a shorter syntax for function expressions.
//You can skip the function keyword, the return keyword, and the curly brackets:

function multi(p1, p2) { return p1 * p2 }; //Normal Function
console.log(multi(4, 5))

let x1 = function (p1, p2) { return p1 * p2 }; //Anonymous function
let x1Value = x1(2, 1)
console.log(x1Value)

let x2 = (p1, p2) => p1 * p2; //Arrow Fuction - Reduced Anonymous Function
let x2Value = x2(4, 8)
console.log(x2Value)
