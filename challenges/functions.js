// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb) {
    return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last 
  * name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
   return a * b;
}

function greeting(first, last) {
    return `Hello ${first} ${last}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 

//In a web page, global variables belong to the window object.
//Global variables can be used (and changed) by all scripts in the page 
//(and in the window).
//A local variable can only be used inside the function where it is defined. 
//It is hidden from other functions and other scripting code.
//A closure is a function having access to the parent scope, even after the parent function has closed.


const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
myFunction();