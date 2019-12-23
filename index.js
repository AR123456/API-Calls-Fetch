const fetchData = async searchTerm => {
  // the index get request
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "trilogy",
      s: searchTerm
    }
  });
  console.log(response.data);
};

const input = document.querySelector("input");
// using set time out to change this to do the fetch when user stops typing
// input.addEventListener("input", event => {
//   fetchData(event.target.value);
// });

let timeoutId;
const onInput = event => {
  // if there is a timer running clear it so the existing one is cleard and a new timer created.  this will happen until user has no more inputs. (a pause for x amount of time) When that happens the timer will run out and the fetchData will happen.
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  // assign an id to the setTimeout being created so that it can be used inthe if
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 500);
};

input.addEventListener("input", onInput);
// setTimeout()
// in the second argument put the amount of time to run.dropdown-item
// when set time out runs it returns an integer ( can see this in the console)
// the intiger is a timer that identifies the timer that was created
// can call the clear time out function to stop a timer
// can call clear time out and pass in the intiger created when timer was created for example clearTimeout(3)
