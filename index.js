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
      // use a helper function here to get the second request to  the API out of inside here for clarity
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
// make this async and await for axios
const onMovieSelect = async movie => {
  // console.log(movie);
  // going to use the IMDb
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "trilogy",
      i: movie.imdbID
    }
  });
  document.querySelector("#summary").innerHTML = movieTemplate(response.data);
};
// moving this big blob of html template out of the axios request
const movieTemplate = movieDetail => {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieDetail.Awards}</p>
        <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieDetail.BoxOffice}</p>
        <p class="subtitle">Box Offfice</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieDetail.Metascore}</p>
        <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieDetail.imdbRating}</p>
        <p class="subtitle">IMBD Rating</p>
    </article>
    <article class="notification is-primary">
        <p class="title">${movieDetail.imdbVotes}</p>
        <p class="subtitle">IMDB Votes</p>
    </article>
  `;
};
