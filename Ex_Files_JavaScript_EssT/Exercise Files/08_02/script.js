const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];

// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTimer = timer[0] + ":" + timer[1] + ":" + timer[2] + ":" + timer[3];
    theTimer.innerHTML = timer;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100)/60);
    timer[2] = Math.floor((timer[3]/100)/60);
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;

}

// Start the timer:
function start() {
    let textEnteredLength = testArea.nodeValue.length;
    if (textEnteredLength === 0) {
        setInterval(runTimer, 10);
    }
}

// Reset everything:
function reset() {

}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", start, false);