// Importar funciones
import { toggleSound } from "./navbar.js";
import { saveName, playAnonymously } from "./formUser.js";
import { showInstructions, btnPlay } from "./instructions.js";
import { showRandomImages } from "./game.js"; 

// Declaracion de constantes
const changeSound = document.getElementById("iconSound");
const saveNameButton = document.getElementById("saveName");
const btnPlayAnonymously = document.getElementById("playAnonymously");

const howToPlayButton = document.getElementById("howToPlayButton");

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

