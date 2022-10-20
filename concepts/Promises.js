/*
    Promises are special objects in JS.
    that represents the eventual state(completion/ failure) of the asynchronous operation.
    
*/

console.log("Hello from Promises.js");

const burgerApi = "https://my-burger-api.herokuapp.com/burgers/";
const burgerMenu = fetch(burgerApi);

burgerMenu.then(function () {
  //once the promise state fulfilled callback function gets executed.
  console.log("Callback function executed");
});

console.log(burgerMenu);

// here we solved IOC problem
/*
  function () {
    console.log("Callback function executed");
  }
  control of this function is not in passed into burgermenu control
*/

// -----------------------------------------------------------------------------------

//server
let api = {
  createOrder: function (cb1) {
    console.log("Creating the Order");
    let myPromise = new Promise(function (myResolve, myReject) {
      myResolve(); // when successful
      myReject(); // when error
    });
    return myPromise;
  },
  paymentSection: function () {
    console.log("Payment section");
    let myPromise = new Promise(function (myResolve, myReject) {
      myResolve(); // when successful
      myReject(); // when error
    });
    return myPromise;
  },
  orderSummary: function () {
    console.log("Please find the order summary");
    let myPromise = new Promise(function (myResolve, myReject) {
      myResolve(); // when successful
      myReject(); // when error
    });
    return myPromise;
  },
  walletUpdate: function () {
    console.log("Wallet updated");
  },
};

const p1 = api.createOrder();
p1.then(() => api.paymentSection())
  .then(() => api.orderSummary())
  .then(() => api.walletUpdate());

/*
      here we prevented Pyramid of Doom/ Callback hell
*/

// ----------------------------------------------------------------
