const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".ratings-container");
let selectedRating = "Satisfied";

// getting event listener off the parent of the send review
// button ,the panel
ratingsContainer.addEventListener("click", (e) => {
  //   console.log(event.path[0]);
  //   console.log(event.target);
  if (e.target.parentNode.classList.contains("rating")) {
    // console.log(e.target);
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
    // console.log(selectedRating);
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"><i>
    <strong>Thanks!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We will use your feeback for improvements</p>
    `;
});
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
