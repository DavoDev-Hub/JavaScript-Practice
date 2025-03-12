const startGameBtn = document.getElementById("start-game-btn");

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const default_user_choice = "rock";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt("Rock, Paper or Scissors?", "").toLowerCase();
  if (selection !== rock && selection !== paper && selection !== scissors) {
    alert("Invalid choice! We chose Rock for you!");
    default_user_choice = rock;
  }
  return selection;
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});

// const start = function startGame() {
//   console.log("Game is starting...");
// };

// method example
// a mehtod is a function that is a property of an object
// const person = {
//     name: "John",
//     greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// person.greet(); // Hello John
