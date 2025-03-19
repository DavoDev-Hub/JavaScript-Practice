// const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild
// const startAddMovieButton = document.querySelector("header").children[1];
// const startAddMovieButton = document.querySelector("header").lastElementChild;
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMNovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

startAddMovieButton.addEventListener("click", toggleMNovieModal);
