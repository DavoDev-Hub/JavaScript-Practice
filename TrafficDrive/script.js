const roadRails = 4;
let carRail = 1;
let gameOver = false;
let enemyInterval;
const road = document.getElementById("road");
const gameContainer = document.getElementById("game-container");
const gameOverText = document.getElementById("game-over");
const restartButton = document.getElementById("restart-btn");

function createRails() {
  road.innerHTML = "";
  for (let col = 0; col < roadRails; col++) {
    const rail = document.createElement("div");
    rail.classList.add("rail");

    if (col === carRail) {
      const car = document.createElement("div");
      car.classList.add("car");
      rail.appendChild(car);
    }

    road.appendChild(rail);
  }
}

function moveCar(railChange) {
  if (gameOver) return;
  const newRail = carRail + railChange;
  if (newRail >= 0 && newRail < roadRails) {
    carRail = newRail;
    createRails();
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") moveCar(-1);
  if (event.key === "ArrowRight") moveCar(1);
});

// Verificar colisiones
function checkCollision(car, enemy) {
  const carRect = car.getBoundingClientRect();
  const enemyRect = enemy.getBoundingClientRect();

  return !(
    carRect.top > enemyRect.bottom ||
    carRect.bottom < enemyRect.top ||
    carRect.right < enemyRect.left ||
    carRect.left > enemyRect.right
  );
}

// Mostrar Game Over y detener el juego
function endGame() {
  gameOver = true;
  clearInterval(enemyInterval);
  gameOverText.style.display = "block";
}

function createEnemy() {
  if (gameOver) return;

  const enemy = document.createElement("div");
  enemy.classList.add("enemyCar");

  // Aparece en un carril aleatorio
  const enemyRail = Math.floor(Math.random() * roadRails);
  enemy.style.left = `${enemyRail * 55}px`;
  enemy.style.top = "0px";
  gameContainer.appendChild(enemy);

  let positionY = 0;
  function moveEnemy() {
    if (gameOver) {
      enemy.remove();
      return;
    }

    positionY += 5;
    enemy.style.top = positionY + "px";

    const car = document.querySelector(".car");
    if (car && checkCollision(car, enemy)) {
      endGame();
      return;
    }

    if (positionY < 400) {
      requestAnimationFrame(moveEnemy);
    } else {
      enemy.remove();
    }
  }

  moveEnemy();
}

function restartGame() {
  gameOver = false;
  carRail = 1;
  gameOverText.style.display = "none";
  document.querySelectorAll(".enemyCar").forEach((enemy) => enemy.remove()); // Eliminar enemigos en pantalla
  createRails();
  enemyInterval = setInterval(createEnemy, 2000);
}

restartButton.addEventListener("click", restartGame);

createRails();
enemyInterval = setInterval(createEnemy, 2000);
