//after redirect getting name of the collection using URLSearchParams.get()
let collection_name = new URLSearchParams(window.location.search).get("value");

//handling back button url refreshing and removing parameters by storing the params inside localStorage
if (collection_name) {
  localStorage.setItem("collection-name", collection_name);
} else {
  collection_name = localStorage.getItem("collection-name");
}
console.log("2ndpg cName", collection_name);

const collection_title = document.getElementById("collection-title");
const poem_list_el = document.getElementById("poem-list");

//setting collection name
collection_title.innerText = collection_name.toUpperCase().replace("-", " ");

//POEM_LIST====================================================
async function fetchPoemList(collection) {
  console.log("inside ShowList:", collection);
  try {
    const response = await fetch("../../assets/json/poemList.json");
    // const response = await fetch("example.json");
    if (!response.ok) {
      throw new Error("Response was not ok!");
    }
    data = await response.json();
    showPoemList(data.chapters);
  } catch (error) {
    console.log("something went wrong while fetching: ", error);
  }
}

function showPoemList(data) {
  let poem_list = null;

  //get poem_list from json
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    if (data[i].title == collection_name) {
      poem_list = data[i].poems;
      break;
    }
  }

  //iterate and append to poem-list
  for (let i = 0; i < poem_list.length; i++) {
    // console.log(poem_list[i].title);
    let poem_title = poem_list[i].title;
    let poem_title_div = getPoemListEl(poem_title);
    poem_list_el.appendChild(poem_title_div);
  }
}

function getPoemListEl(title) {
  const poem_list_div = document.createElement("div");
  poem_list_div.classList.add("poem-list-title", "padding");
  poem_list_div.setAttribute("data-title", title);
  const poem_list_div_p = document.createElement("p");
  poem_list_div_p.innerText = title;
  poem_list_div_p.setAttribute("data-title", title);
  poem_list_div.appendChild(poem_list_div_p);

  poem_list_div.addEventListener("click", function (event) {
    // console.log("clicked", event.target.getAttribute("data-catagory"));
    let title = event.target.getAttribute("data-title");
    if (title != null) {
      setTimeout(() => {
        //sending collection name with url string
        window.location.href =
          "../pages/poem.html?collection-name=" +
          collection_name +
          "&poem-title=" +
          title;
      }, 200);
    }
  });

  return poem_list_div;
}

//fucntions calls
fetchPoemList(collection_name);
