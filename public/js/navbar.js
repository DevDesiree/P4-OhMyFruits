export function toggleSound(sound) {

    if (sound.classList.contains("fa-volume-high")) {
        sound.classList.remove("fa-volume-high")
        sound.classList.add("fa-volume-xmark")
    } else {
        sound.classList.remove("fa-volume-xmark")
        sound.classList.add("fa-volume-high")
    }
}

