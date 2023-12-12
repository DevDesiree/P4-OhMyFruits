
let gameTimer;
let fruitAnimations = [];


function stopGameAndShowHomeScreen() {
  clearTimeout(gameTimer);

  fruitAnimations.forEach(animation => animation.pause());

  document.getElementById("gameScreen").style.display = 'none';
  document.getElementById("homeScreen").style.display = 'block';

}

function continueGame() {
  gameTimer = setTimeout(endGame, 30000); 
  fruitAnimations.forEach(animation => animation.play());
}

function handleQuitButtonClick() {

  if (confirm("Are you sure you want to quit the game?")) {
    stopGameAndShowHomeScreen();
  } else {
    continueGame();
  }
}

const quitButton = document.getElementById("quitButton");
quitButton.addEventListener("click", handleQuitButtonClick);