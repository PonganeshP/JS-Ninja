/*

Function statement
Function expression
Anonymous function
Named Function expression

Diff between Parameters and Arguments

First class functions:
Ability of functions that can be used as values

Higher order functions:


*/

// Function statement or Function declaration
function xyz(message) {
  //parameter
  console.log(message + "Theni la irundhu");
}

// Function expression
var b = function abc() {
  console.log("abc");
};

// Anonymous function
try {
  (function () {
    console.log("Anonymous");
  })();
} catch (error) {
  console.log(error);
}

//Diff between Parameters and Arguments

xyz("vanakam da mapla"); //arguments
