const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let size = 20;
let color = "black";
let x, y;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  //x and y of mouse
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  //x and y of mouse
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  // is mouse button being held down ?
  if (isPressed) {
    //x and y of mouse
    x2 = e.offsetX;
    y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
