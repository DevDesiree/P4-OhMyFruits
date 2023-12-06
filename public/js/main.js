// Funcion navbar Modularized
import { toggleSound } from "./navbar.js";
import { } from "./playerName.js";
import { } from "./startButton.js";
import { } from "./game.js";


const changeSound = document.getElementById("iconSound")




changeSound.addEventListener("click", ()=>{
    toggleSound(changeSound)
})

