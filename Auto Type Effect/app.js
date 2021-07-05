const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "Welcome to this web site, enjoy your look around !";
let textIndex = 1;
let textSpeed = 300 / speedEl.value;
writeText();

function writeText() {
  textEl.innerText = text.slice(0, textIndex);
  textIndex++;
  if (textIndex > text.length) {
    textIndex = 1;
  }
  setTimeout(writeText, textSpeed);
}

speedEl.addEventListener("input", (e) => {
  textSpeed = 300 / e.target.value;
});
