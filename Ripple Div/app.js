const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // console.log(buttonTop, buttonLeft);
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // console.log(xInside, yInside);
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";
    // add to dom - for this the add event needs to be old school function
    // with each click we get the effect but it also adds a new circle each time
    this.appendChild(circle);
    // clean out the circles every 1/2 second
    setTimeout(() => circle.remove(), 500);
  });
});
