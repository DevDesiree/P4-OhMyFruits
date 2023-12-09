
import { showRandomImages } from "./game.js";
import { messageError } from "./playerName.js";
import * as CountdownModule from "./countdown.js";

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');

    startButton.addEventListener('click', function () {
        const playerName = localStorage.getItem('Username');
        const selectedDifficulty = localStorage.getItem('Difficulty');

        if (playerName && selectedDifficulty) {
            hideGameButtons();
            // CountdownModule.initializeCountdown(selectedDifficulty);
            showRandomImages();
        } else {
            messageError('Please enter your name and choose a difficulty level.');
        }
    });

    restartButton.addEventListener('click', function () {
        const selectedDifficulty = localStorage.getItem('Difficulty');

        if (selectedDifficulty) {
            restartGame();
            showRandomImages();
        } else {
            messageError('Please start the game first.');
        }
    });
});



export function restartGame() {
    hideGameButtons();
    const restartButton = document.getElementById('restartButton');
    restartButton.style.display = 'block';
    CountdownModule.initializeCountdown(localStorage.getItem('Difficulty'));
    showRandomImages();
}

