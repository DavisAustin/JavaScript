// // GLOBALLY SCOPED VARIABLES
// const firstNumber = 10;
// const secondNumber = 13;

// // Immediately invoked function
// let multiplyThese = (function(a,b) {
//     // Locally scoped variable
//     let result = a * b;
//     return result;
// })(firstNumber,secondNumber);

// console.log(multiplyThese);


// Creating Objects
function MyToolBox(hammer, drill, saw, screwdriver) {
  this.hammer = hammer,
  this.drill = drill,
  this.saw = saw,
  this.screwdriver = screwdriver
};

var myTool = new MyToolBox("The hammer", "My drill", "My saw", "My screwdriver");

console.log(myTool);