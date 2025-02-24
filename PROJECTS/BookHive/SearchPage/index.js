let search;

document
  .getElementById("id-button-search")
  .addEventListener("click", function FunctionSearch() {
    search = document.getElementById("id-input-search").value;
    disableImg();
    showBooks();
    showBooks(search);
  });

function disableImg() {
  const figureElement = document.getElementById("id-figure");
  if (figureElement) {
    figureElement.style.visibility = "hidden";
  } else {
    console.error("Element with ID 'id-figure' not found.");
  }
}
