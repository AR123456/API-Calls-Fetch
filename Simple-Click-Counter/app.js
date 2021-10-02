const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");

count = 0;

decrease.addEventListener("click", () => {
  console.log("decrease ");
  count--;
  console.log(count);
  document.getElementById("value").innerHTML = count;
});

increase.addEventListener("click", () => {
  console.log("increase");
});

reset.addEventListener("click", () => {
  console.log("reset");
});
