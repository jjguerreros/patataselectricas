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

