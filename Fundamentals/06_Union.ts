/* Declare a variable with a Union type */
let ID: number | string = "SJ37342";

/* Define a function that take a param that can be a number or a string */
function getID(id: number | string): number | string {
    if(typeof id === "number") {
        return id;
    }
    else  if(typeof id === "string") {
        return `String ID is : ${id}`;
    }
    else {
        return "Invalid ID";
    }
}

/* Define an array of strings and numbers */
let arr: (string | number)[] = ["SJ37342", 123456];

/* Define constants */
const PI = 3.14; // ! this constant can not be changed
let options: "A" | "B" | "C" = "A"; // ? this has 3 possible values