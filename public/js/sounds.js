//Funcion para reproducir 

const iconSound = document.getElementById("iconSound")

var audio;

// Se pasa como parametro el link y se crea una clase
function loadAudio(source) {
    audio = new Audio(source);
    audio.preload = "auto";
}

// Con la funcion loadAudio se reproduce si no hay ningun sonido sonando.
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
