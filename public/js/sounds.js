
const iconSound = document.getElementById("iconSound");
const audioInstances = {};
let currentAudio;  

iconSound.addEventListener("click", () => {
    togglePlay("./public/sounds/backgroundSound.mp3")
});


function loadAudio(source) {
    const audio = new Audio(source);
    audio.preload = "auto";
    return audio;
}


export function togglePlay(source) {
    if (!audioInstances[source]) {
        audioInstances[source] = loadAudio(source);
    }

    currentAudio = audioInstances[source];  

    if (currentAudio.paused) {
        currentAudio.play();
        iconSound.classList.remove("fa-volume-xmark");
        iconSound.classList.add("fa-volume-high");

    } else {
        currentAudio.pause();
        iconSound.classList.remove("fa-volume-high");
        iconSound.classList.add("fa-volume-xmark");
    }
}
