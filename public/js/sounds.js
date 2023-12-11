//Funcion para reproducir 
const iconSound = document.getElementById("iconSound");
const audioInstances = {};

// Se pasa como parámetro el enlace y se crea una instancia de la clase Audio
function loadAudio(source) {
    const audio = new Audio(source);
    audio.preload = "auto";
    return audio;
}

// Con la función loadAudio se reproduce si no hay ningún sonido sonando.
export function togglePlay(source) {
    if (!audioInstances[source]) {
        audioInstances[source] = loadAudio(source);
    }

    const currentAudio = audioInstances[source];

    if (currentAudio.paused) {
        currentAudio.play();
    } else {
        currentAudio.pause();
    }
}




