// add a class called show to then use CSS to transtion the list item into the view port annimate in
// get each list item
const items = document.querySelectorAll("#timeline li");

//this function checks to see if something is in the viewport
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
// loop through the items (li) and check to see if it is in the viewport, ifit is add class of show
const run = () => {
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });
};

//Events - when to fire off the run function
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
