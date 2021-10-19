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
  // console.log(linksContainer.getBoundingClientRect());
});
// js for the fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log(scrollHeight, "scroll Height");
  // console.log(navHeight, "nav height");
  if (scrollHeight > navHeight) {
    // console.log(" scroll height move than nav height");
    navbar.classList.add("fixed-nav");
  } else {
    // console.log(" scroll height less than nav height ");
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    // console.log("scroll height more than 500");
    // show link is the top arrow
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// smooth scroll to location when selecting from navbar
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    //  preventDefault
    e.preventDefault();
    //  navigate to the place on the page where the href is
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containterHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containterHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
