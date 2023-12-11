// Funcionalidad para final de juego.

function showHideEndGame (){
  const gameOverScreen = document.getElementById("gameOverScreen")
  const contentGame = document.getElementById("contentGame")
  contentGame.style.display = "none"
  gameOverScreen.style.display = "block"

}

function showUserDataRanking() {
  const nameTd = document.getElementById('nameTd')
  const difficultyTd = document.getElementById('difficultyTd')
  const scoreTd = document.getElementById("scoreTd")

  nameTd.innerText = localStorage.getItem("Username")
  difficultyTd.innerText = localStorage.getItem("Difficulty")
  scoreTd.innerText = localStorage.getItem("Score")
}

export function showEndGame(){
  showHideEndGame()
  showUserDataRanking()
}
