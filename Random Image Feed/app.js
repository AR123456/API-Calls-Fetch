const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 10;

// make request for to unsplash changing size each time so we get a diffrent image
// use for loop to creat a div, each div will get this slighly diffrent image

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandSize()}`;
  container.appendChild(img);
}
// console.log(getRandNum());
function getRandNum() {
  return Math.floor(Math.random() * 10) + 300;
}
function getRandSize() {
  // need 2 nums for hight and width
  return `${getRandNum()}x${getRandNum()}`;
}
