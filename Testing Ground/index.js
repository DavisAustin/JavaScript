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


// // Creating Objects
// function MyToolBox(hammer, drill, saw, screwdriver) {
//   this.hammer = hammer,
//   this.drill = drill,
//   this.saw = saw,
//   this.screwdriver = screwdriver
// };

// var myTool = new MyToolBox("The hammer", "My drill", "My saw", "My screwdriver");

// console.log(myTool);

//More Object Practice
// function Person(name, age, favoriteColor) {
//   this.name = name,
//   this.age = age,
//   this.favoriteColor = favoriteColor
// };

// var newPerson = [
//   person01 = new Person("Jake", 12, "Blue"),
//   person02 = new Person("Heather", 24, "Aquamarine"),
//   person03 = new Person("Noah", 31, "Paleo Blue"),
//   person04 = new Person("Vicky", 29, "Ruby")
// ];

// console.log(newPerson[1]);
// console.log(newPerson[2]);
// console.log(newPerson[0]);
// console.log(newPerson[3]);
var timerDuration = 20;

function countDown(a) {
  while(a > 0) {
    a--;
    return a;
  };
};

console.log(countDown(timerDuration));