let button = document.getElementById("button");
let score = document.getElementById("score");
let count = 0;
let timer = 10;

const gameInterval = setInterval(endGame, 1000);

function endGame() {
  timer--;

  if (timer === 0) {
    clearInterval(gameInterval);
    alert(`Ваш результат: ${count}`);
  }
}

button.addEventListener("click", function () {
  count++;
  score.textContent = "Очки: " + count;

  let randomX = Math.random() * window.innerWidth;
  let randomY = Math.random() * window.innerHeight;

  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
});
