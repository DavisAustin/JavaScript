const SAMPLETEXT = document.querySelector("#sample-text");
const USERTEXT = document.querySelector("#user-text");

let userInput = USERTEXT.value;
let sampleTextHtml = SAMPLETEXT.innerHTML;

function stringLength() {
    let textEntered = USERTEXT.value;
    let sampleTextMatch = sampleTextHtml.substring(0,textEntered.length);

    if (textEntered == sampleTextHtml) {
        console.log("Correct!");
    } else {
        if (textEntered == sampleTextMatch) {
            USERTEXT.style.borderColor = "#65CCf3";
            console.log("Neutral");
        } else {
            USERTEXT.style.borderColor = "#E95D0F";
            console.log("Wrong!");
        }
    }

}

USERTEXT.addEventListener("keyup", stringLength, false);