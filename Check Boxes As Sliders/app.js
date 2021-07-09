// get the actual check box
const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");
// use change for a check bos
toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);
//  theClickedONe is e.target
function doTheTrick(theClickedOne) {
  // .checked is a boolean
  if (good.checked && cheap.checked && fast.checked) {
    if (good == theClickedOne) {
      // set fast.checked to false
      fast.checked = false;
    }
    if (cheap == theClickedOne) {
      good.checked = false;
    }
    if (fast == theClickedOne) {
      fast.checked = false;
    }
  }
}
