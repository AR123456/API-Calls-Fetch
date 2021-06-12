const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCouner = () => {
    //   + to turn "0" into 0
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCouner, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCouner();
});
