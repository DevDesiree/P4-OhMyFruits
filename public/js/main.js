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

function hideGameButtons() {
    const gameButtonsSection = document.getElementById('gameButtonsSection');
    gameButtonsSection.style.display = 'none';

    const countdownSection = document.getElementById('countdownSection');
    countdownSection.style.display = 'block';
}

btnPlay.addEventListener("click", () => {
    startGame();
});

