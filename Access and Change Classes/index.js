// Read only properties commonly have methods that allow you to manipulate them however needed

// Lists all classes held by the element
document.querySelector(".headline").classList;

// Adds a specified class to the selected element
document.querySelector(".headline").classList.add("new-class");

// Lists the selected class in the array of classes held by the selected element
document.querySelector(".headline").classList[0];

// Adds a class to the selected element
document.querySelector(".headline").classList.add("remove-class");

// Removes a specified class from the selected element
document.querySelector(".headline").classList.remove("remove-class");

// Toggles a class on or off
document.querySelector(".headline").classList.toggle("new-class");
// False

document.querySelector(".headline").classList.toggle("newclass");
// True