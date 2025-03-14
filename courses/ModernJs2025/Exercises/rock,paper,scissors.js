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

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return rock;
  } else if (randomValue < 0.67) {
    return paper;
  } else {
    return scissors;
  }
};

const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return "It's a draw!";
  } else if (
    (cChoice === rock && pChoice === scissors) ||
    (cChoice === paper && pChoice === rock) ||
    (cChoice === scissors && pChoice === paper)
  ) {
    return "Computer wins!";
  } else {
    return "Player wins!";
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const ComputerChoice = getComputerChoice();
  const winner = getWinner(ComputerChoice, playerSelection);
  console.log("Computer choice: " + ComputerChoice);
  console.log("Player choice: " + playerSelection);
  console.log(winner);
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
