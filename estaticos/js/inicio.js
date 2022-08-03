var $imagenMover = $('.imagen-mover');
var moving = false;

$imagenMover.on("mousedown", initialClick);

function move(e) {
    console.log('e.clientX:' + e.clientX)
    console.log('e.clientY:' + e.clientY)
    var newX = e.clientX - 10;
    var newY = e.clientY - 10;
    image.style.left = newX + "px";
    image.style.top = newY + "px";
}

function initialClick(e) {
    if (moving) {
        document.removeEventListener("mousemove", move);
        moving = !moving;
        return;
    }
    moving = !moving;
    image = this;
    document.addEventListener("mousemove", move, false);
}

/**
 * Random colored text
 * <rabbitfighter@cryptolab.net>
 */

//Get arrays of the text
let letters = document.querySelector('.titulo-cumple').innerHTML.split('');


// Converts integer to hex 
const colToHex = (c) => {
  // Hack so colors are bright enough
  let color = (c < 75) ? c + 75 : c
  let hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// uses colToHex to concatenate
// a full 6 digit hex code
const rgbToHex = (r,g,b) => {
  return "#" + colToHex(r) + colToHex(g) + colToHex(b);
}

// Returns three random 0-255 integers
const getRandomColor = () => {
  return rgbToHex(
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255));
}

// This is the prototype function
// that changes the color of each
// letter by wrapping it in a span
// element.
Array.prototype.randomColor = function() {
  let html = '';
  this.map( (letter) => {
    let color = getRandomColor();
    html +=
      "<span style=\"color:" + color + "\">"
      + letter +
      "</span>";
  }) 
  return html;
};

// Set the text
/* document.querySelector('.titulo-cumple').innerHTML = letters.randomColor(); */