var pens;

pens = ['red', 'blue', 'green', 'orange'];

console.log("Before: ", pens);

// Properties:
// Get a property of an object by name:
// console.log("Array length: ", pens.length);

// Methods
// Reverse the array:
// pens.reverse();

// Remove the first value of the array:
// pens.shift();

// Add values to the front of an array:
// pens.unshift("purple", "black");

// Find the specific position (pos) and remove n number
// pens.splice(2, 1) //Starts at the second item

// Returns index number for a specific search
// var result = pens.indexOf("orange", 0);
// console.log("The value is: ", pens[result]);

// Return the items in an array as a comma separated list
var arrayString = pens.join(", ");
console.log("String from array: ", arrayString);

console.log("After: ", pens);