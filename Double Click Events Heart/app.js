const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");
// using the dblclick event
// loveMe.addEventListener("dblclick", (e) => {
//   console.log(124);
// });
// home made double click
let clickTime = 0;
let timesClicked = 0;
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  const x = e.clientX;
  const y = e.clientY;
  // account for offset
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  // coordinates inside the image
  //   console.log(xInside, yInside);
  //    have access to top,left,bottom, right CSS properties since the .loveme.fa-heart has a position of absolute
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked;
  //   clean up the DOM, remove the i tag
  setTimeout(() => heart.remove(), 1000);
};
