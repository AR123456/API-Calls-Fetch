const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // do some stuff - target body and change its color each time clicked
  //   style backgound
  //   console.log(document.body);
  // loop array and get rand array entry
  getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * colors.length);
  // console.log(randomNumber);
}
