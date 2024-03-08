//====variables============================================

const collections = document.getElementById("collections");
const poem_list_container = document.getElementById("poem-list-container");

let data = null;

//====methods==============================================
//redirects to poem list
if (collections) {
  collections.addEventListener("click", function (event) {
    // console.log("clicked", event.target.getAttribute("data-catagory"));
    let collection = event.target.getAttribute("data-catagory");
    if (collection != null) {
      setTimeout(() => {
        //sending collection name with url string
        window.location.href =
          "../src/pages/poem-list.html?value=" + collection;
      }, 200);
    }
  });
}
