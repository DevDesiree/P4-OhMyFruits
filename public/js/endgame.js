import { togglePlay } from "./sounds.js"
import { launchGame } from "./game.js"

function showHideEndGame (){
  const gameOverScreen = document.getElementById("gameOverScreen")
  const contentGame = document.getElementById("contentGame")
  contentGame.style.display = "none"
  gameOverScreen.style.display = "flex"

}


function showUserDataRanking() {
  const nameTd = document.getElementById('nameTd')
  const difficultyTd = document.getElementById('difficultyTd')
  const scoreTd = document.getElementById("scoreTd")

  nameTd.innerText = localStorage.getItem("Username")
  difficultyTd.innerText = localStorage.getItem("Difficulty")
  scoreTd.innerText = localStorage.getItem("totalScore")
}


export function showEndGame(){
  showHideEndGame()
  showUserDataRanking()
}


export function restartGame(){
  const gameOverScreen = document.getElementById("gameOverScreen")
  gameOverScreen.style.display = "none"
  location.reload(true);
}