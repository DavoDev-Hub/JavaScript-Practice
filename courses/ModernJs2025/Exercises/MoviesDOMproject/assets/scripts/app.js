// const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild
// const startAddMovieButton = document.querySelector("header").children[1];
// const startAddMovieButton = document.querySelector("header").lastElementChild;
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMNovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMNovieModal();
};

const backdropClickHandler = () => {
  toggleMNovieModal();
};

startAddMovieButton.addEventListener("click", toggleMNovieModal);
backdrop.addEventListener("click", toggleMNovieModal);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
