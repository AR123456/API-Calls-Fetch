let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
// btns is a node list
// console.log(btns[0].classList);
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(btn.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
