const DINO = document.querySelector(".dino");
const CACTUS = document.querySelector(".cactus");

let isAlive;

function jump() {
  if (!DINO.classList.contains("jump")) {
    DINO.classList.add("jump");
    setTimeout(() => {
      DINO.classList.remove("jump");
    }, 300);
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key == " ") {
    jump();
  }
});

function checkCollision() {
  const dinoRect = DINO.getBoundingClientRect();
  const cactusRect = CACTUS.getBoundingClientRect();
  if (dinoRect.top >= 130 && cactusRect.left < 30 && cactusRect.left > 0) {
    stopGame();
    alert("The End");
    startGame();
  }
}
function startGame() {
  CACTUS.classList.add("move");
  isAlive = setInterval(checkCollision, 10);
}

function stopGame() {
  CACTUS.classList.remove("move");
  clearInterval(isAlive);
}

startGame();
