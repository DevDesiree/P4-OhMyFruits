// Funcion navbar Modularized
import { toggleSound } from "./navbar.js";
import { saveName, playAnonymously } from "./playerName.js";
import { } from "./startButton.js";
import { } from "./game.js";


const changeSound = document.getElementById("iconSound")

const saveNameButton = document.getElementById("saveName");
const btnPlayAnonymously = document.getElementById("playAnonymously");


changeSound.addEventListener("click", ()=>{
    toggleSound(changeSound)
})

saveNameButton.addEventListener("click", (event) =>{
    saveName(event)
})

btnPlayAnonymously.addEventListener("click", ()=>{
    playAnonymously()
})
