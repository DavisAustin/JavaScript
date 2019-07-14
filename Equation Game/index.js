const EQUATION = document.querySelector("#equation");
const ANSWER = document.querySelector("#answer");

let gameRunning = false;
let answer;
// Can text area be numerical value only?
let userAnswer = ANSWER.value;

// Check if answer is equal to equation when user presses enter
function checkAnswer() {
    console.log(answer);
}

// Create an addition equation
function generateEquation() {
    let a = randomNumber();
        b = randomNumber();
    EQUATION.innerHTML = a + " + " + b;
    let answer = a + b;
    return answer;
}

// Pick a random number between 1 and 10
function randomNumber() {
    let randomNumber = Math.floor(Math.random()*10 + 1);
    return randomNumber;
}

// Add placeholder text to textarea
function addPlaceholder() {
    console.log("Add Placeholder");
    ANSWER.setAttribute("placeholder", "Answer here...");
}

// Remove placeholder text from textarea
function removePlaceholder() {
    console.log("Remove Placeholder");
    ANSWER.value = "";
    ANSWER.setAttribute("placeholder", "");
}

// Event listeners
ANSWER.addEventListener("focus", removePlaceholder, false);
ANSWER.addEventListener("blur", addPlaceholder, false);
ANSWER.addEventListener("click", generateEquation, false);
ANSWER.addEventListener("keyup", checkAnswer, false);