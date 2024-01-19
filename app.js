console.log("Let's get this party started!");

async function getGif(searchText){
  const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  console.log(res.data);
}

const form = document.querySelector('#searchform');
form.addEventListener("submit", function (e) {
  const input = document.querySelector('#search');
  e.preventDefault();
  console.log(input.value);
  getGif(input.value);
  input.value = '';
})