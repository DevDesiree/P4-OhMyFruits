import { toggleSound } from "./navbar.js";
const sound = document.getElementById("iconSound")

sound.addEventListener("click", ()=>{
    toggleSound(sound)
})