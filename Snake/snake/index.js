const gameBoard = document.getElementById("game-board");
let direction = "right";
let gameInterval;

for (let i = 0; i < 400; i++) {
  const cell = document.createElement("div"); // creamos un nuevo div

  cell.setAttribute("data-index", i); // le agregamos el atributo para poder identificarlos

  gameBoard.appendChild(cell); // Agrega nuevo div al nodo
}

// Representamos a la serpiente en un array de objetos
let snake = [
  { x: 10, y: 10 }, // Cabeza
  { x: 9, y: 10 }, // Cuerpo
  { x: 8, y: 10 }, // Cola
];

let food = [{ x: 5, y: 5 }];

function drawSnake() {
  const cells = document.querySelectorAll("#game-board div"); // seleccionamos las celdas
  // removemos cualquier rastro de celda anterior
  cells.forEach((cell) => cell.classList.remove("snake"));

  /* Pintamos a la serpiente localizandola
        10 * 20 + 10 = 210 ubicacion de la cabeza
        9 * 20 + 10 = 209 ubicacion del cuerpo
        8 * 30 + 10 = 208 ubicacion de la cola
  */
  snake.forEach((part) => {
    const index = part.y * 20 + part.x;
    cells[index].classList.add("snake"); // la pintamos con la clase
  });

  const foodIndex = food.y * 20 + food.x;
  cells[foodIndex].classList.add("food");
}

// Generar comida aleatoria
function generateFood() {
  food.x = Math.floor(Math.random() * 20);
  food.y = Math.floor(Math.random() * 20);

  if (snake.some((part) => part.x === food.x && part.y === food.y)) {
    generateFood();
  }
}

// funcion para establecer el movimiento de la serpiente
function moveSnake() {
  const head = { ...snake[0] };

  if (direction === "right") head.x++;
  else if (direction === "left") head.x--;
  else if (direction === "up") head.y--;
  else if (direction === "down") head.y++;

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    generateFood();
  } else {
    snake.pop();
  }
}

setInterval(() => {
  moveSnake();
  drawSnake();
}, 200);

// Establecer los eventos
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "down") direction = "up";
  else if (event.key === "ArrowDown" && direction !== "up") direction = "down";
  else if (event.key === "ArrowLeft" && direction !== "right")
    direction = "left";
  else if (event.key === "ArrowRight" && direction !== "left")
    direction = "right";
});

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
  direction = "right";
  generateFood();
  startGame();
}

function CheckCollision() {
  const head = snake[0];

  // Colision en los bordes
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
