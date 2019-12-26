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

const input = document.querySelector("input");

const onInput = async event => {
  const movies = await fetchData(event.target.value);
  // using for of here to loop , this is not supported by IE at this time so beware
  // could you another loop methond here

  for (let movie of movies) {
    const div = document.createElement("div");
    div.innerHTML = `
  <img src="${movie.Poster}"/>
  <h1>${movie.Title}</h1>
  `;
    document.querySelector("#target").appendChild(div);
  }
};

input.addEventListener("input", debounce(onInput, 500));
