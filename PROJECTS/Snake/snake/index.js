const gameBoard = document.getElementById("game-board");
let direction = "right";
let gameInterval;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let snake = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];
let food = { x: 5, y: 5 };

// BOARD
for (let i = 0; i < 400; i++) {
  const cell = document.createElement("div");
  cell.setAttribute("data-index", i);
  gameBoard.appendChild(cell);
}

// SNAKE
function drawSnake() {
  const cells = document.querySelectorAll("#game-board div");
  cells.forEach((cell) => {
    cell.classList.remove("snake", "food");
  });

  snake.forEach((part) => {
    const index = part.y * 20 + part.x;
    cells[index].classList.add("snake");
  });

  const foodIndex = food.y * 20 + food.x;
  cells[foodIndex].classList.add("food");
}

// SNAKE MOVE
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "down") direction = "up";
  else if (event.key === "ArrowDown" && direction !== "up") direction = "down";
  else if (event.key === "ArrowLeft" && direction !== "right")
    direction = "left";
  else if (event.key === "ArrowRight" && direction !== "left")
    direction = "right";
});

function moveSnake() {
  const head = { ...snake[0] };

  if (direction === "right") head.x++;
  else if (direction === "left") head.x--;
  else if (direction === "up") head.y--;
  else if (direction === "down") head.y++;

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    generateFood();
    updateScore();
  } else {
    snake.pop();
  }
  if (CheckCollision()) {
    stopGame();
  }
}

// FOOD
function generateFood() {
  food.x = Math.floor(Math.random() * 20);
  food.y = Math.floor(Math.random() * 20);

  if (snake.some((part) => part.x === food.x && part.y === food.y)) {
    generateFood();
  }
}
generateFood();

// GAME SETTINGS
function startGame() {
  gameInterval = setInterval(() => {
    moveSnake();
    drawSnake();
  }, 200);
}
function stopGame() {
  clearInterval(gameInterval);
  alert("Game Over!");
  resetGame();
}
function resetGame() {
  snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ];
  score = 0;
  direction = "right";
  generateFood();
  startGame();
}
function CheckCollision() {
  const head = snake[0];
  if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
    return true;
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

startGame();

//SCORE
function updateScore() {
  score++;
  document.getElementById("score").textContent = `🍎: ${score}`;

  //Actualizar la puntuacion mas alta
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("🏆", highScore);
  }
  document.getElementById("high-score").textContent = `🏆: ${highScore}`;
}
