console.log("From Eventual context.js............");

function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  return y;
}

let z = x();
z();
