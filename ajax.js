/*
const URL ="https:\/\/purr.objects-us-east-1.dream.io\/i\/o4bq0Nx.jpg";

function handleResponse(response) {
    response.json().then()
}

fetch(URL).then(handleResponse);
*/

const catPic = document.getElementById("image");
const button = document.getElementById("btn");

  //show image
  function getRandomCat() {
    fetch("https://aws.random.cat/meow")
    .then(response => response.json())
    .then(data => {
        catPic.innerHTML = `<img src="${data.file}"/>`
    })
  }

  button.addEventListener("click", getRandomCat);

 