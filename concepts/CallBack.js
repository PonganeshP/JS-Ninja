/*
  A callback function is a function passed into another function as an argument,
  which is then invoked inside the outer function to complete some kind of routine or action.
*/

var arr = [1, 4, 5, 3, 5];
console.log("From Callback JS");
function modifyArr(a, callback) {
  a.push(100);
  callback();
}

modifyArr(arr, function () {
  console.log("Modified:......", arr);
});
