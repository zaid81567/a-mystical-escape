const urlParam = new URLSearchParams(window.location.search);
let collection_name = urlParam.get("collection-name");
let poem_title = urlParam.get("poem-title");
let poem = null;
// console.log(collection_name, poem_title);

//handling back button url refreshing and removing parameters by storing the params inside localStorage
if (collection_name && poem_title) {
  localStorage.setItem("collection-name", collection_name);
  localStorage.setItem("poem-title", poem_title);
} else {
  collection_name = localStorage.getItem("collection-name");
  poem_title = localStorage.getItem("poem-title");
}
// console.log("poem-title:", poem_title);

//ELEMENTS
const title_el = document.getElementById("poem-title");
const poem_el = document.getElementById("poem");
const title_container = document.getElementById("title-container");
const poet_name_el = document.getElementById("poet");
const play_btn_el = document.getElementById("btn");

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
  console.log(poems.length);
  for (let i = 0; i < poems.length; i++) {
    if (poems[i].title.toLowerCase() == title.toLowerCase()) {
      //set greek god name if valid
      if (collection_name.toLowerCase() == "greek-mythology") {
        const greek_god_el = document.createElement("p");
        greek_god_el.classList.add("greek-god-name");
        greek_god_el.innerText = poems[i].god;

        title_container.append(greek_god_el);
      }
      poem = poems[i].content;
      return poem;
    }
  }
}

function showPoem(poem) {
  title_el.innerText = poem_title;
  poem_el.innerText = poem;
  poet_name_el.innerText = "~Samiha";
}

//EVENT LISTENER
play_btn_el.addEventListener("click", () => {
  let whole_poem = poem_title + "\n" + poem;
  let utterance = new SpeechSynthesisUtterance(whole_poem);
  speechSynthesis.speak(utterance);
});

//fetch poem from json
fetchPoem(collection_name, poem_title);
