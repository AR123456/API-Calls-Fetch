const tagsEL = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  console.log(input);
  //   split on common
  const tags = input
    .split(",")
    // remove white space
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  console.log(tags);
  // clear the text area
  tagsEL.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEL.appendChild(tagEl);
  });
}

function randomSelect() {
  //
}
