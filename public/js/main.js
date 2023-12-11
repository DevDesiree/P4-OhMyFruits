// Importar funciones
import { toggleSound } from "./navbar.js";
import { saveName, playAnonymously } from "./formUser.js";
import { showInstructions, btnPlay } from "./instructions.js";
import { launchGame } from "./game2.js";
import { restartGame } from "./endgame.js"


// Declaracion de constantes
const changeSound = document.getElementById("iconSound");
const saveNameButton = document.getElementById("saveName");
const btnPlayAnonymously = document.getElementById("playAnonymously");
const howToPlayButton = document.getElementById("howToPlayButton");
const restartButton = document.getElementById("restartButton");

// Eventos del DOM

changeSound.addEventListener("click", () => {
    toggleSound(changeSound);
});

saveNameButton.addEventListener("click", (event) => {
    saveName(event);
});

btnPlayAnonymously.addEventListener("click", () => {
    playAnonymously();
});

howToPlayButton.addEventListener("click", () => {
    showInstructions(howToPlayButton);
})

//Pasar a otra funcion, es solo prueba el codigo de abajo
const contentGame = document.getElementById("contentGame")
const startButton = document.getElementById("startButton")
const instructionsAndPlay = document.getElementById("instructionsAndPlay")

startButton.addEventListener("click" ,() => {
    instructionsAndPlay.style.display = "none"
    contentGame.style.display = "block"
    launchGame();
})

restartButton.addEventListener("click", ()=> {
    restartGame()
})
