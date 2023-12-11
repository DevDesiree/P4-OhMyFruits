let saveName = document.getElementById("saveName");
saveName.addEventListener("click", () => {
    let audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./public/sounds/dificultyButtons.mp3");
    audioElement.play();
});
let playAnonymously= document.getElementById("playAnonymously");
playAnonymously.addEventListener("click", () => {
    let audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./public/sounds/dificultyButtons.mp3");
    audioElement.play();
});
