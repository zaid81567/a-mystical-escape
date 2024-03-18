// //cat
// const cat_el = document.getElementById("cat");
// console.log(cat_el);
// const root_el = document.documentElement;

// cat_el.addEventListener("click", () => {
//   console.log("clicked");
//   root_el.style.setProperty("--cat-color", "red");
// });

// Get the cat element
const catEl = document.getElementById("cat");
const bookTitle_el = document.getElementById("book-title");

// Get the root element
const rootEl = document.documentElement;

// Function to generate a random color
function getRandomColor() {
  // Generate random values for red, green, and blue channels
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // Construct the color string in RGB format
  return `rgb(${r}, ${g}, ${b})`;
}

// Add click event listener to the cat element
catEl.addEventListener("click", () => {
  console.log("clicked");
  // Generate a random color
  const randomColor_cat = getRandomColor();
  const randomColor_title = getRandomColor();
  // Set the random color as the value of the --cat-color custom property
  rootEl.style.setProperty("--cat-color", randomColor_cat);
  bookTitle_el.style.color = randomColor_title;
});

// Function to generate a random color
function getRandomColor() {
  // Generate random values for red, green, and blue channels
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // Construct the color string in RGB format
  return `rgb(${r}, ${g}, ${b})`;
}
