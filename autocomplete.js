// function that will take the autocomplete configuraion and render the auto complete on the screen
// fetchData() - finds stuff
//renderOption()- function that knows how to render sufff
// onOptionSelected() function that gets invoked when a user clicks an option
// root - element that the autocomplete configuration should be rendered into

const createAutoComplete = ({ root }) => {
  //
  // set up for the auto complet widgete

  root.innerHTML = `
<lable><b>Search For a Movie</b></label>
<input class="input" >
<div class="dropdown"> 
  <div class="dropdown-menu">
    <div class="dropdown-content results"></div>
  </div>
</div>

`;
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = async event => {
    const movies = await fetchData(event.target.value);
    if (!movies.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    // using for of here to loop , this is not supported by IE at this time so beware
    // could you another loop method here
    dropdown.classList.add("is-active");
    resultsWrapper.innerHTML = "";
    for (let movie of movies) {
      const option = document.createElement("a");
      const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
      option.classList.add("dropdown-item");
      option.innerHTML = `
  <img src="${imgSrc}"/>
  ${movie.Title} 
  `;
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = movie.Title;
        onMovieSelect(movie);
      });
      resultsWrapper.appendChild(option);
    }
  };
  input.addEventListener("input", debounce(onInput, 500));
  document.addEventListener("click", event => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
