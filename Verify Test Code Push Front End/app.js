const codes = document.querySelectorAll(".code");
// on page load jump the cursor to the first box position 0 in the node list
codes[0].focus();
//  doing some JS to put focus on the next box after a valid number input
codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // clear the value to prevent 2 numbers in a space 
      codes[idx].value = "";
      // in the node list set the focous on the next box in the list .   Need to use the set timeout so that the number in the prior box is not carried froward.
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      // this works but need to prevent 2 numbers from going into one box
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
3;
