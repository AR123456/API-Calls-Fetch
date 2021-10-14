const questions = document.querySelectorAll(".question");
// loop the node list
questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
//  using mouse over
// questions.forEach((question) => {
//   const btn = question.querySelector(".question-btn");
//   btn.addEventListener("mouseover", function () {
//     questions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });
