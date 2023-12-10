
export function showInstructions(howToPlayButton){
  const modalInstructions = document.getElementById("modalInstructions");
  const buttonsGame = document.querySelector(".buttons-game");
  modalInstructions.style.display = "block"
  howToPlayButton.style.display = "none"
  buttonsGame.style.height = "50px"
}


export function btnPlay(){
  console.log("");
}