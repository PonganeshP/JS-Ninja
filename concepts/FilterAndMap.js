const employees = [
  {
    name: "Harry",
    age: 24,
  },
  {
    name: "Ram",
    age: 50,
  },
];

const updatedObj = employees.map((e) => {
  let retObj = { retired: true };
  return e.age > 49 ? { ...e, ...retObj } : e;
});

const filteredObj = employees.filter((e) => {
  return e.age < 49;
});
console.log(updatedObj);
console.log(filteredObj);
