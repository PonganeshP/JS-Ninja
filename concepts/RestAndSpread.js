// REST operation... combine rest of elements -> array
// Use rest to enclose the rest of specific user-supplied values into an array:

function callMe(firstName, lastName, ...nickNames) {
  console.log(nickNames);
}

callMe("Ponganesh", "P", "pg", "gold", "ponna");

//Spread operation.... array -> spread into seperate element
//Use spread to expand an array’s items into individual arguments:

function interview(firstName, lastName, company) {
  console.log(`${firstName} ${lastName} selected for ${company}`);
}

interview(...["Ponganesh", "P", "Google"]);
interview(["Ponganesh", "P", "Google"]); // undefined
