const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   console.log("clicked");
  //   linksContainer.classList.toggle("show-links");
  const linksHeight = links.getBoundingClientRect().height;
  const containterHeight = linksContainer.getBoundingClientRect().height;
  //   console.log(linksHeight, containterHeight);
  if (containterHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  console.log(linksContainer.getBoundingClientRect());
});
