let startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
    let audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./public/sounds/mixkit-casino-bling-achievement-2067.mp3");
    audioElement.play();
});