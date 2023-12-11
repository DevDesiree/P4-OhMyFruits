import { togglePlay } from "./sounds.js"
import { launchGame } from "./game.js"
// Funcionalidad para final de juego.


/**
 * Oculta el contenido del juego y muestra la pantalla de fin de juego.
 */
function showHideEndGame (){
  const gameOverScreen = document.getElementById("gameOverScreen")
  const contentGame = document.getElementById("contentGame")
  contentGame.style.display = "none"
  gameOverScreen.style.display = "flex"

}

/**
 * Muestra los datos del usuario en la tabla.
 */
function showUserDataRanking() {
  const nameTd = document.getElementById('nameTd')
  const difficultyTd = document.getElementById('difficultyTd')
  const scoreTd = document.getElementById("scoreTd")

  nameTd.innerText = localStorage.getItem("Username")
  difficultyTd.innerText = localStorage.getItem("Difficulty")
  scoreTd.innerText = localStorage.getItem("totalScore")
}

/**
 * Muestra la pantalla de fin de juego y los datos del usuario .
 */
export function showEndGame(){
  showHideEndGame()
  showUserDataRanking()
}

// Restar Game
export function restartGame(){
  const gameOverScreen = document.getElementById("gameOverScreen")
  gameOverScreen.style.display = "none"
  location.reload(true);

}
