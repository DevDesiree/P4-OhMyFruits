let easyButton = document.getElementById("easyButton");
easyButton.addEventListener("click", () => {
    let audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./public/sounds/dificultyButtons.mp3");
    audioElement.play();
});
let normalButton = document.getElementById("normalButton");
normalButton.addEventListener("click", () => {
    let audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./public/sounds/dificultyButtons.mp3");
    audioElement.play();
});
let hardButton = document.getElementById("hardButton");
hardButton.addEventListener("click", () => {
    let audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./public/sounds/dificultyButtons.mp3");
    audioElement.play();
});