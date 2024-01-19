console.log("Let's get this party started!");

async function getGif(searchText){
  const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  console.log(res.data.data[0].images.original.url);
  const giphyURL = res.data.data[0].images.original.url;
  const imageHTML = `<center><img src = "${giphyURL}"></center>`;
  console.log(imageHTML);
  $("div").append(imageHTML);
}

$("body").append("<div></div>");
const form = document.querySelector('#searchform');
form.addEventListener("submit", function (e) {
  const input = document.querySelector('#search');
  e.preventDefault();
  console.log(input.value);
  getGif(input.value);
  input.value = '';
})

const resetButton = document.querySelector('#resetButton');
console.log(resetButton);
resetButton.addEventListener("click", function(e){
  e.preventDefault();
  console.log("Made it to the reset function");
  $("div").empty();
})