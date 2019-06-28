// GLOBALLY SCOPED VARIABLES
const firstNumber = 10;
const secondNumber = 13;

// Immediately invoked function
let multiplyThese = (function(a,b) {
    // Locally scoped variable
    let result = a * b;
    return result;
})(firstNumber,secondNumber);

console.log(multiplyThese);

