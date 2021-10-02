const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const value = document.getElementById("value");

count = 0;

decrease.addEventListener("click", () => {
  console.log("decrease ");
  count--;
  console.log(count);
  value.innerHTML = count;
  value.style.background = "red";
});

increase.addEventListener("click", () => {
  console.log("increase");
  count++;
  value.innerHTML = count;
  value.style.background = "green";
});

reset.addEventListener("click", () => {
  console.log("reset");
  count = 0;
  value.innerHTML = count;
  value.style.background = "transparent";
});
