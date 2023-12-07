// Funcion sacada de PlayerName por que no se usa aun
// Se guarda por si mas adelante se usara o lo que sea.

window.endGame = function (score) {
  const playerName = playerNameInput.value.trim();
  if (playerName && !validatePlayerName(playerName) && localStorage.getItem(playerName)) {
    localStorage.setItem(playerName, score);
    scoreDiv.textContent = 'Total Score: ' + score;
  }
};