/*
  A polyfill is a piece of code used to provide modern functionality on older browsers 
  that do not natively support it.

*/

let employee = {
  firstName: "Pg",
  age: 24,
};

let pg2 = birthDayReminder.myBind(employee, "Ipad", "earpods");
pg2("Audi car");

Function.prototype.myBind = function (...args) {
  let obj = this;
  let arr = args.slice(1);
  return function (...arg2) {
    obj.apply(args[0], [...arr, ...arg2]);
  };
};
let birthDayReminder = function (gift, gift2, gift3) {
  console.log(
    this.firstName +
      " " +
      "turns " +
      (this.age + 1) +
      ` on coming March, Lets gift him ${gift} and ${gift2} as well as ${gift3}`
  );
};

// let pg = birthDayReminder.bind(employee, "Iphone");
// pg();
