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
  //   split on common
  const tags = input
    .split(",")
    // remove white space
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

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
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const randomTag = pickRandomTag();
      });
    });
  }, 100);
}
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
