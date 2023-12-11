
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
        iconSound.classList.remove("fa-volume-high");
        iconSound.classList.add("fa-volume-xmark");

    } else {
        currentAudio.pause();
        iconSound.classList.remove("fa-volume-xmark");
        iconSound.classList.add("fa-volume-high");
    }
}

// Función para mutear/desmutear
export function toggleMute(source) {
    if (!audioInstances[source]) {
        audioInstances[source] = loadAudio(source);
    }

    currentAudio = audioInstances[source]; 
    currentAudio.muted = !currentAudio.muted;


    if (currentAudio.muted) {
        iconSound.classList.remove("fa-volume-high");
        iconSound.classList.add("fa-volume-mute");
    } else {
        iconSound.classList.remove("fa-volume-mute");
        iconSound.classList.add("fa-volume-high");
    }
}
