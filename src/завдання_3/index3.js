const gameElement = document.getElementById("gameEl");
const scoreElement = document.getElementById("score");
let score = 0;
let timer = 10;

const gameInterval = setInterval(endGame, 1000);

function endGame() {
  timer--;

  if (timer === 0) {
    clearInterval(gameInterval);
    alert(`Ваш результат: ${score}`);
  }
}

function writeScore() {
  score++;
  scoreElement.textContent = score;
}

gameElement.addEventListener("click", writeScore);
