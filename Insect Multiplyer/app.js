const screens = document.querySelectorAll(".screen");
// screens is a node list of the 3 screens in the HTML

console.log(screens);
// used in css to shift the node list itmes up 100vh to come into view
screens[0].classList.add("up");
