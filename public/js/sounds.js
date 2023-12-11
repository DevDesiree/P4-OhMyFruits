
const iconSound = document.getElementById("iconSound");
const audioInstances = {};
let currentAudio;  

iconSound.addEventListener("click", () => {
    toggleMute("./public/sounds/backgroundSound.mp3")
});


function loadAudio(source) {
    iconSound.style.display = "block"
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

    } else {
        currentAudio.pause();
    }
}

function toggleMute(source) {
    if (!audioInstances[source]) {
        audioInstances[source] = loadAudio(source);
    }

    currentAudio = audioInstances[source];  
    currentAudio.muted = !currentAudio.muted;

    if (currentAudio.muted) {
        iconSound.classList.remove("fa-volume-high");
        iconSound.classList.add("fa-volume-xmark");
    } else {
        iconSound.classList.remove("fa-volume-xmark");
        iconSound.classList.add("fa-volume-high");
    }
}