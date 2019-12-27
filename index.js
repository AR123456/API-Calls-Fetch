const fetchData = async searchTerm => {
  // the index get request
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "trilogy",
      s: searchTerm
    }
  });
  if (response.data.Error) {
    return [];
  }
  return response.data.Search;
};
// set up for the auto complet widget
const root = document.querySelector(".autocomplete");
root.innerHTML = `
<lable><b>Search For a Movie</b></label>
<input class="input" >
<div class="dropdown"> 
  <div class="dropdown-menu">
    <div class="dropdown-content results"></div>
  </div>
</div>

`;
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async event => {
  const movies = await fetchData(event.target.value);
  // using for of here to loop , this is not supported by IE at this time so beware
  // could you another loop methon here
  dropdown.classList.add("is-active");
  // fixing issue with new search of video appends to end of list vs clearing and making new list
  resultsWrapper.innerHTML = "";

  for (let movie of movies) {
    const option = document.createElement("a");
    // creating a const for the image source and using tunary operator to compare for NA and have empty if its that.dropdown-item

    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

    option.classList.add("dropdown-item");

    option.innerHTML = `
  <img src="${imgSrc}"/>
  ${movie.Title} 
  `;
    resultsWrapper.appendChild(option);
  }
};

input.addEventListener("input", debounce(onInput, 500));
//adding this event listener for anytime someone clicks on the "document"
document.addEventListener("click", event => {
  //events bubble event.target is what gets clicked
  console.log(event.target);
  // can look at what we have defined abouve as root which is the div with the class of auto complete
  // this is the auto complet widget
  //if the root element doesnt contain the element that was clicked on close the dropdown
  if (!root.contains(event.target)) {
    //remove the is active class which is what is making it show up
    dropdown.classList.remove("is-active");
  }
});
