/*
    Promises are special objects in JS.
    that represents the eventual state(completion/ failure) of the asynchronous operation.
    
*/

console.log("Hello from Promises.js");

const api = "https://my-burger-api.herokuapp.com/burge/";
const burgerMenu = fetch(api);

burgerMenu.then(function () {
  //once the promise state fullfilled callback function gets executed.
  console.log("Nothing");
});

console.log(burgerMenu);
