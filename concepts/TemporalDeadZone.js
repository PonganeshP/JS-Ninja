/*
  Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.

  Temporal Dead Zone starts when the code execution enters the block 
  which contains the let or const declaration and continues until the declaration has executed.  

*/

console.log("From Temporaldeadzone js");

function print() {
  function log() {
    console.log(age);
  }
  log();
}
const age = 20;

print();

{
  // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
