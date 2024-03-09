const urlParam = new URLSearchParams(window.location.search);
let collection_name = urlParam.get("collection-name");
let poem_title = urlParam.get("poem-title");
// console.log(collection_name, poem_title);

//handling back button url refreshing and removing parameters by storing the params inside localStorage
if (collection_name && poem_title) {
  localStorage.setItem("collection-name", collection_name);
  localStorage.setItem("poem-title", poem_title);
} else {
  collection_name = localStorage.getItem("collection-name");
  poem_title = localStorage.getItem("poem-title");
}
console.log("poem-title:", poem_title);

//ELEMENTS
const title_el = document.getElementById("poem-title");
const poem_el = document.getElementById("poem");

//FUNCTIONS

async function fetchPoem(collection_name, poem_title) {
  // const response = await fetch("../../json/" + collection_name);
  const response = await fetch(
    "../../assets/json/" + collection_name + ".json"
  );
  const data = await response.json();
  // console.log(poem);
  let poems = data.poems;
  let poem = getPoem(poem_title, poems);
  // console.log(poem);
  showPoem(poem);
}

function getPoem(title, poems) {
  for (let i = 0; i < poems.length; i++) {
    if (poems[i].title == title) {
      return poems[i].content;
    }
  }
}

function showPoem(poem) {
  title_el.innerText = poem_title;
  poem_el.innerText = poem;
}

//fetch poem from json
fetchPoem(collection_name, poem_title);
