const screens = document.querySelectorAll(".screen");
// screens is a node list of the 3 screens in the HTML
console.log(screens);
// used in css to shift the node list itmes up 100vh to come into view
// screens[0].classList.add("up");
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");

const start_btn = document.getElementById("start-btn");
const game_container = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

let seconds = 0;
let score = 0;
let selected_insect = {};
start_btn.addEventListener("click", () => screens[0].classList.add("up"));
choose_insect_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_insect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});
function createInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocation();
}
function getRandomLocation() {
  const width = window.innerHeight;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
}
