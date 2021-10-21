const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are zero index based
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `Giveaway ends on ${weekday}, ${month} ${date} ${year} ${hours}:${minutes}am`;
const futureTime = futureDate.getTime();
// console.log(futureTime);
function getRemainingTime() {
  const today = new Date().getTime();
  //   console.log(today, "time in miliseconds");
  const t = futureTime - today;
  // this is the math but # of mili sec in day , hour and min are const that could have been set as such
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //   t number of mili seconds between now and the future time divided by the const of number of miliseconds one day to get the number of days

  let days = t / oneDay;
  //  using floor to get a whole number of days
  days = Math.floor(days);
  // doing same type of conversion to get whole number of hours ,min , seconds
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  //   put values into array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expred"> Sorry giveaway has ended! </h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
