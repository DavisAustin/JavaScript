const EQUATION = document.querySelector("#equation");
const ANSWER = document.querySelector("#answer");

let gameRunning = false;
// Can text area be numerical value only?
let userAnswer;
let equationAnswer;
let currentEquation;

// Check if answer is equal to equation when user presses enter
function checkAnswer() {
    userAnswer = ANSWER.value;
    if (equationAnswer == userAnswer) {
        console.log("Correct!");
        ANSWER.classList.replace("focused", "correct");
        EQUATION.innerHTML = "Correct!"
        setTimeout(function() {
            console.log(equationAnswer);
            ANSWER.value = "";
            ANSWER.classList.replace("correct", "focused");
            generateEquation();
        }, 500);
    } else if (userAnswer > equationAnswer) {
        console.log("Incorrect!");
        EQUATION.innerHTML = "Incorrect!"
        ANSWER.classList.replace("focused", "incorrect");
        setTimeout(function() {
            ANSWER.value = "";
            EQUATION.innerHTML = currentEquation;
            ANSWER.classList.replace("incorrect", "focused");
        }, 500);
    }
}

// Create an addition equation
function generateEquation() {
    let a = randomNumber();
        b = randomNumber();
    currentEquation = a + " + " + b;
    EQUATION.innerHTML = currentEquation;
    equationAnswer = a + b;
    return equationAnswer;
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
    ANSWER.classList.replace("focused", "neutral");
}

// Remove placeholder text from textarea
function removePlaceholder() {
    console.log("Remove Placeholder");
    ANSWER.value = "";
    ANSWER.setAttribute("placeholder", "");
    ANSWER.classList.replace("neutral", "focused");
    console.log(ANSWER.classList);
}

// Event listeners
ANSWER.addEventListener("focus", removePlaceholder, false);
ANSWER.addEventListener("blur", addPlaceholder, false);
ANSWER.addEventListener("click", generateEquation, false);
ANSWER.addEventListener("keyup", checkAnswer, false);