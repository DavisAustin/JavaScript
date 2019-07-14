// Select DOM Elements
const THETIMER = document.querySelector("#timer");
const THEBUTTON = document.querySelector("#start-stop");
const RESET = document.querySelector("#reset");

var timer = 0;
var interval;
var timerRunning = false;

// Increases the timer variable incrementally by 1
function countUp() {
    // Add system milliseconds and let it out
    timer++;
    THETIMER.innerHTML = timer;
}

// Start the timer
function startTimer() {
    interval = setInterval(countUp, 1000);
    THEBUTTON.innerHTML = "Stop";
}

// Stop the timer
function stopTimer() {
    clearInterval(interval);
    THEBUTTON.innerHTML = "Start";
}

// Sets the interval for countUp
function toggleTimer() {
    if (timerRunning){
        stopTimer();
        timerRunning = false;
    } else {
        startTimer();
        timerRunning = true;
    }
}

// Clears interval and resets timer to 0
function resetTimer() {
    clearInterval(interval);
    THETIMER.innerHTML = "0";
    timer = 0;
    timerRunning = false;
}


// Event Listeners
THEBUTTON.addEventListener("click", toggleTimer, false);
RESET.addEventListener("click", resetTimer, false);