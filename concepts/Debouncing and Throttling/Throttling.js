/*
    Throttling is also similiar to Debouncing.

    Debounce:
    event ---300ms---> event

    Throttling:
    event -> event -> event
    FC---------300ms-------FC

    Main use case: To limit the rate of network calls made to server.
     
*/

let count = 0;
let getData = () => {
  console.log("Count: ", count++);
};

let throttle = (fn, delay) => {
  let flag = false;
  return function () {
    if (!flag) {
      fn();
      flag = true; // till the timer delay gets executed(400ms) flag will be set and will not enter getData function call
      setTimeout(() => {
        flag = false;
      }, delay);
    }
  };
};

window.addEventListener("resize", throttle(getData, 400));
