function func2() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000); // 0 1 2
  }
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 2000); // 3 3 3
  }
}
func2();
