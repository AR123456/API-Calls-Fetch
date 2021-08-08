const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
getData();
filter.addEventListener("input", (e) => filterData(e.target.value));

//  using this to get pics https://randomuser.me/
async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=50");
  const { results } = await res.json();
  //   const data = await res.json();
  // waits until the request completes...
  //   console.log(data);
  // clear rusults out of the DOM
  result.innerHTML = "";
  //   loop through each user and make a list item
  results.forEach((user) => {
    const li = document.createElement("li");
    // console.log(user);
    //  push onto a list item
    listItems.push(li);
    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>
    ${user.location.city}, ${user.location.country}
    </p>
    </div>
    `;
    result.appendChild(li);
  });
}
function filterData(e) {
  console.log(e);
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(e.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
