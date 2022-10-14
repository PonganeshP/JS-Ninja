var arr = [1, 4, 5, 3, 5];
console.log("From Callback JS");
function modifyArr(a, callback) {
  a.push(100);
  callback();
}

modifyArr(arr, function () {
  console.log("Modified:......", arr);
});
