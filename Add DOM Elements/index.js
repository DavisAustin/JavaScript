//New Methods

// .createElement(); // Create an element.
// .createTextNode(); // Create text node.
// .appendChild(); // Place one child node inside another


const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption"); // Creates an element in the DOM - to add text, you must also create a text node

// captionElement.append(altText); .append is not supported yet by all browsers
// FEATURED.append(captionElement);

var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);

FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt","");