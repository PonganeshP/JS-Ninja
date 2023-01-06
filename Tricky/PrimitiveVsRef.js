var pi = 100;
function summa(pi) {
  pi = 3222;
  console.log(pi); //3222
}

summa(pi);
console.log(pi); //100

//---------------------------------------

var pi = 100;
function summa() {
  pi = 3222;
  console.log(pi); //3222
}

summa(pi);
console.log(pi); //3222

//-----------------------------

var ob = { key: "value nothing" };
function summa1() {
  ob.key = "Vlah";
  console.log(ob); // {"key":"Vlah"}
}

console.log(ob); //{"key":"value nothing"}
summa1(ob);
console.log(ob); // {"key":"Vlah"}

//

var pi = 100;
function summa(pi) {
  pi = 3222;
  console.log(pi);
}
let pi3 = pi;
pi = 1000;
console.log(pi3); //100
console.log(pi); //1000

//Reference type
// pi2 is pointed to same memory address of pi

var pi = { key: "value nothing" };
function summa(pi) {
  pi = 3222;
  console.log(pi);
}
let pi2 = pi;
pi.key = "Blah";
console.log(pi2); // also updated to Blah
console.log(pi);
