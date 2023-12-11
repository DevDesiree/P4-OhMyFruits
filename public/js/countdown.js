

import { showEndGame } from "./endgame.js";

let countdown;
let currentTime;

export function startGame(timer) {
    currentTime = timer / 1000
    displayTime();
    console.log("timer" + currentTime);

    countdown = setInterval(function () {
        currentTime--;
        displayTime();

        if (currentTime <= 0) {
            clearInterval(countdown);
            gameOver();

            setInterval(() => {
                showEndGame();
            }, 1000);

        } else if (currentTime <= 10) {
            toggleBlinking();
        }
    }, 1000);
}

function displayTime() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = formattedTime;
}

function toggleBlinking() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.style.color = (countdownElement.style.color === 'rgb(194, 11, 80)') ? 'white' : '#c20b50ff';
}

function gameOver() {
    document.getElementById('countdown').innerText = 'Game Over';
    document.getElementById('restartButton').style.display = 'block';
}


