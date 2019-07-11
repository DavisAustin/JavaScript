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

// const TIMER = document.querySelector("#timer");
// TIMER.innerHTML = "Hello World!";


// //NAME GENERATOR
// const FIRSTNAMES = ["Amy", "Brian", "Cody", "Dennis", "Ellen", "Fredrick", "Ginger", "Heather", "Izzy", "James"];

// const LASTNAMES = ["Anderson", "Brady", "Collins", "Davis", "Eisen", "Foster", "Gordon", "Hamelton", "Isawa", "Jenson"];


// function nameGenerator() {
//     return "My name is " + pickFirstName() + " " + pickLastName() + ".";
// };

// function randomNumber() {
//   return Math.floor(Math.random()*10);
// };

// function pickFirstName() {
//   return FIRSTNAMES[randomNumber()];
// };

// function pickLastName() {
//   return LASTNAMES[randomNumber()];
// };

// console.log(nameGenerator());

const EQUATION = document.querySelector("#equation");
const ANSWER = document.querySelector("#answer");

// Check if answer is equal to equation when user presses enter
function checkAnswer() {
};

// Create an addition equation
function createAdditionEquation() {
    var a = randomNumber();
        b = randomNumber();
    EQUATION.innerHTML = a + " + " + b;
    var answer = a + b;
    return answer;
};

// Pick a random number between 1 and 10
function randomNumber() {
    var randomNumber = Math.floor(Math.random()*11);
    if (randomNumber == 0) {
        randomNumber++;
    };
    return randomNumber;
};