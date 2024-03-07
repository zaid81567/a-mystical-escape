const collections = document.getElementById("collections");

collections.addEventListener("click", function (event) {
  console.log("clicked", event.target.getAttribute("data-catagory"));
  let collection = event.target.getAttribute("data-catagory");
  //redirects
  if (collection != null) {
    setTimeout(() => {
      window.location.href = "../src/pages/poems-list.html/";
    }, 200);
    // window.replace("../src/pages/poems-list.html/");
  }
});

function showPoemList() {}
