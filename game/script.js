let score = 0;
let activeHole = null;
let gameInterval = null;

const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

function randomHole() {
  const randomIndex = Math.floor(Math.random() * holes.length);
  return holes[randomIndex];
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  startButton.disabled = true;

  gameInterval = setInterval(() => {
    if (activeHole) {
      activeHole.classList.remove('active');
    }
    activeHole = randomHole();
    activeHole.classList.add('active');
  }, 800);

  setTimeout(endGame, 15000); // End game after 15 seconds
}

function endGame() {
  clearInterval(gameInterval);
  if (activeHole) {
    activeHole.classList.remove('active');
  }
  activeHole = null;
  startButton.disabled = false;
  alert('Game Over! Your score is ' + score);
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole === activeHole) {
      score++;
      scoreDisplay.textContent = score;
      activeHole.classList.remove('active');
      activeHole = null;
    }
  });
});

startButton.addEventListener('click', startGame);
