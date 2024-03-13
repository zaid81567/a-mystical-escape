const random_btn = document.getElementById("random");

random_btn.addEventListener("click", () => {
  fetchPoemList();
});

async function fetchPoemList() {
  console.log("fetching poem list");
  try {
    const response = await fetch("../../assets/json/poemList.json");
    if (!response.ok) {
      throw new Error("Response was not ok!");
    }
    data = await response.json();
    getRandPoem(data);
  } catch (error) {
    console.log("something went wrong while fetching: ", error);
  }
}

function getRandPoem(data) {
  // console.log("getting random poem data");
  let randCollectionIndex = Math.floor(Math.random() * data.chapters.length);
  let randCollectionName = data.chapters[randCollectionIndex];
  let randPoemIndex = Math.floor(
    Math.random() * data.chapters[randCollectionIndex].poems.length
  );
  let randPoemName = data.chapters[randCollectionIndex].poems[randPoemIndex];

  let collection_name = randCollectionName.title;
  let title = randPoemName.title;

  // console.log(randCollectionName, randPoemName);

  setTimeout(() => {
    //sending collection name with url string
    window.location.href =
      "./src/pages/poem.html?collection-name=" +
      collection_name +
      "&poem-title=" +
      title;
  }, 200);
}
