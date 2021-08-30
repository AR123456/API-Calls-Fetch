// https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165
// jquery
// Smooth Scrolling
// $(".btn").on("click", function (event) {
//   if (this.hash !== "") {
//     event.preventDefault();
//     const hash = this.hash;
//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       800
//     );
//   }
// });

// //  from code example
// $(".page-header ul a").on("click", function (e) {
//   // 1
//   e.preventDefault();
//   // 2
//   const href = $(this).attr("href");
//   // 3
//   $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
// });
// const links = document.querySelectorAll(".page-header ul a");

// for (const link of links) {
//   link.addEventListener("click", clickHandler);
// }

// function clickHandler(e) {
//   e.preventDefault();
//   const href = this.getAttribute("href");
//   const offsetTop = document.querySelector(href).offsetTop;

//   scroll({
//     top: offsetTop,
//     behavior: "smooth"
//   });
// }

// JS using scroll()
const buttons = document.querySelectorAll(".btn");

for (const button of buttons) {
  button.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
