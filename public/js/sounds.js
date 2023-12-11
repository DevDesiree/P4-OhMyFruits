//Funcion para reproducir 

const iconSound = document.getElementById("iconSound")

var audio;

function loadAudio(source) {
    audio = new Audio(source);
    audio.preload = "auto";
}

export function togglePlay(source) {
    if (!audio) {
        loadAudio(source);
    }

    if (audio.paused) {
        audio.play();
        
    } else {
        audio.pause();
        
    }
}


iconSound.addEventListener("click", () => {
    togglePlay("./public/sounds/mixkit-medieval-show-fanfare-announcement-226.mp3")
})

saveName.addEventListener("click", togglePlay)
