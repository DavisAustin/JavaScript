// Closure is a function inside a function that relies on the variables in the outside function to work

// function doSomeMath() {
//   var a = 5;
//   var b = 10;
//   function multiply() {
//     var result = a*b;
//     return result;
//   }

//   return multiply;
// }

// var theResult = doSomeMath();

// console.log("The result: ", theResult());

function giveMeEms(pixels) {
  var baseValue = 16;

  function doTheMath() {
    return pixels/baseValue;
  };

  return doTheMath;
};

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

console.log("Small size: ", smallSize(), "em");
console.log("Medium size: ", mediumSize(), "em");
console.log("Large size: ", largeSize(), "em");
console.log("Extra large size: ", xlargeSize(), "em");