let startButton = document.getElementById("startButton");
startButton.addEventListener("click",() =>{
    let audioElement =  document.createElement("audio");
    audioElement.setAttribute("src", "./public/sounds/startButtonSound.wav");
    audioElement.play();
});