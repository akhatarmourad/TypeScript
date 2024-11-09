// Tuples in TypeScript
let product: [string, number] = ["Samsung Galaxy", 899];

let course: [string, number, string[]?, ...string[]];
course = ["TypeScript", 4.5, ["tuples", "functions", "classes"], "JavaScript"];

// Accessing tuple elements
console.log(product[0]);
console.log(course[0]);

// Modifying tuple elements
course[0] = "Spring EcoSystem";
