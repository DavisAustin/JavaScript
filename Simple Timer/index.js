const THETIMER = document.querySelector("#timer");
const THEBUTTON = document.querySelector("#start-stop");

var timer = 0;
var interval;

function countUp() {
    timer++;
    THETIMER.innerHTML = timer;
    if (timer === 10) {
        clearInterval(interval);
    }
}

function startTimer() {
    interval = setInterval(countUp, 1000);
}


THEBUTTON.addEventListener("click", startTimer, false);