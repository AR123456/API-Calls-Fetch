// reviews array object
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// need consts for buttons
const next = document.querySelector(".next-btn");
const previous = document.querySelector(".prev-btn");
const random = document.querySelector(".random-btn");
// set up on clicks
next.addEventListener("click", () => {
  for (let i = 0; i < reviews.length; i++) {
    showReview();
  }
});

function showReview() {
  console.log(reviews);
  //   document.querySelector(".review").innerHTML = `
  //   <div class="img-container">
  //   <img src=${reviews.img} alt="person-1" id="person-img" />
  // </div>
  // <h4 id="author">${reviews.name}</h4>
  // <p id="job">${reviews.job}</p>
  // <p id="info">
  //  ${reviews.text}
  // </p>
  // <div class="button-container">
  // <button class="prev-btn">
  //   <i class="fas fa-chevron-left"></i>
  // </button>
  // <button class="next-btn">
  //   <i class="fas fa-chevron-right"></i>
  // </button>
  // </div>
  // <button class="random-btn">Get Random</button>

  //   `;
}
// with each click on next get next item in the object array
// with click of rand button gen random choice
// put the found array object into the DOM
//  name to #author id
// job to #job
// text to #info
// img to #perons-img
