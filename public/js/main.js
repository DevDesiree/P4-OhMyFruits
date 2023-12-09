// Importar funciones
import { toggleSound } from "./navbar.js";
import { saveName, playAnonymously, startGame } from "./playerName.js";
import { showRandomImages } from "./game.js"; 

// Declaracion de constantes
const changeSound = document.getElementById("iconSound");
const saveNameButton = document.getElementById("saveName");
const btnPlayAnonymously = document.getElementById("playAnonymously");
const btnPlay = document.getElementById("playButton");

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

btnPlay.addEventListener("click", () => {
    startGame();
});

