const EQUATION = document.querySelector("#equation");
const ANSWER = document.querySelector("#answer");
const TIMER = document.querySelector("#timer");
const SCORE = document.querySelector("#score");


let timer = 30;
let timerRunning = false;
let interval;
let score = 0;
let gameRunning = false;


// Store current equation information
let equationAnswer;
let equationAnswerLength;
let currentEquation; //Used when resetting incorrect answers

// Helper functions


// Check if answer is equal to equation on keyup

function checkAnswer() {
    let userAnswer = ANSWER.value;
    let userAnswerLength = ANSWER.value.length;
    if (equationAnswer == userAnswer) {
        answerCorrect();
    } else if (userAnswerLength == equationAnswerLength && userAnswer != equationAnswer) {
        answerIncorrect();
    }
}

// Correct Answer Function
function answerCorrect() {
    ANSWER.classList.replace("focused", "correct");
    EQUATION.innerHTML = "Correct!";
    EQUATION.style.color = "#63d040";
    addPointToScore();
    setTimeout(function() {
        console.log(equationAnswer);
        ANSWER.value = "";
        ANSWER.classList.replace("correct", "focused");
        EQUATION.style.color = "#fff";
        generateEquation();
    }, 500);
}

// Incorrect Answer Function
function answerIncorrect() {
    console.log("Incorrect!");
        EQUATION.innerHTML = "Try Again!"
        ANSWER.classList.replace("focused", "incorrect");
        EQUATION.style.color = "lightcoral";
        setTimeout(function() {
            ANSWER.value = "";
            EQUATION.innerHTML = currentEquation;
            ANSWER.classList.replace("incorrect", "focused");
            EQUATION.style.color = "#fff";
        }, 500);
}

// Create an addition equation
function generateEquation() {
    if (!timerRunning) {
        startTimer();
    }
    let a = randomNumber();
    let b = randomNumber();
    currentEquation = a + " + " + b;
    EQUATION.innerHTML = currentEquation;
    equationAnswer = `${a + b}`; //Template literal - inputting equations into strings (must use back-tick)
    equationAnswerLength = equationAnswer.length;
}

// Pick a random number between 1 and 10
function randomNumber() {
    let randomNumber = Math.floor(Math.random()*10 + 1);
    return randomNumber;
}

function addPointToScore() {
    console.log("added point")
    score++;
    SCORE.innerHTML = "Score: " + score;
}

function countDown() {
    if (timer > 0) {
        timer--;
        TIMER.innerHTML = ":" + timer;
        timerRunning = true;
        return timer;
    } else {
        alert("Score: " + score);
        clearInterval(interval);
        resetGame();
        timerRunning = false;
    }
}

function startTimer() {
    console.log("start timer")
    interval = setInterval(countDown, 1000);
}

function resetGame() {
    timer = 30;
    timerRunning = false;
    score = 0;
    TIMER.innerHTML = ":" + timer;
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
}

// Event listeners
ANSWER.addEventListener("focus", removePlaceholder, false);
ANSWER.addEventListener("blur", addPlaceholder, false);
ANSWER.addEventListener("click", generateEquation, false);
ANSWER.addEventListener("keyup", checkAnswer, false);