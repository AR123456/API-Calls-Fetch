const labels = document.querySelectorAll(".form-control label");
// node list of labels
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      // turn into an array of letters with span arond them
      (letter, i) =>
        `<span style="transition-delay:${i * 50}ms">${letter}</span>`
    )
    // make the array a string
    .join("");
});
