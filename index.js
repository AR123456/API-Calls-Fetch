// need to fetch movie data from an API omdbapi.com index vs show api call
//  http://www.omdbapi.com/

// Send all data requests to:
// http://www.omdbapi.com/?apikey=[yourkey]&

// autocomplete functionality - need rules for how it will work
// style the app

// make network request using axios
// helper function
const fetchData = async () => {
  // the index get request
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "trilogy",
      // s: "avengers"
      // changing to I and hard coding a move to make the data request about a specific movie
      i: "tt0848228"
    }
  });
  console.log(response.data);
};
fetchData();
