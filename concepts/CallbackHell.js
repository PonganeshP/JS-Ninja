/*

    Advantages of Callback:
    1) Making JS asynchronous

    Disadvantages of Callbacks:
    1) Callback Hell - Nested callback will result in Pyramid of doom. 
    Code becomes unmaintainable and hard to debug.
    2) Inversion of Control - giving the function's control to the other function.

    Example Scenario:
        Create order
        Payment section
        Order Summary
        Wallet update

*/
let api = {
  createOrder: function (cb1) {
    console.log("Creating the Order");
    cb1();
  },
  paymentSection: function () {
    console.log("Payment section");
  },
  orderSummary: function () {},
  walletUpdate: function () {},
};

api.createOrder(function () {
  api.paymentSection(function () {
    api.orderSummary(function () {
      api.walletUpdate();
    });
  });
});
