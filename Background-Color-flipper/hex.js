// array of posssible hex values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  // for length of hex array get a random indes value and concatonate onto hextcolor
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    console.log(hexColor);
  }
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
