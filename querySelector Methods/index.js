// Selects first instance of the element called
document.querySelector(".headline");

// Selects all instances of the element called
document.querySelectorAll("h1");

// Shows the innerHTML of an element in the console
document.querySelector(".headline").innerHTML;

// Replaces the innerHTML of an element in the DOM
document.querySelector(".headline").innerHTML = "Hello New World!";

// Displays the element info instead of just the innerHTML info
document.querySelector(".headline").outerHTML;

// Replaces the class of the element selected
document.querySelector(".headline").class = "main-head";