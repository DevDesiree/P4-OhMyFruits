// import { hideGameButtons, startGame, restartGame } from "./startStorage";


import { showRandomImages } from "./game.js";

export function saveName(event) {
  console.log('Save Name button clicked');
  event.preventDefault();
  const playerNameInput = document.getElementById('playerName');
  const playerNameValue = playerNameInput.value.trim();
  const validPlayerName = validatePlayerName(playerNameValue);

  const difficultySelect = document.getElementById('difficulty');
  //const selectedDifficulty = validateSelected(difficultySelect)

  console.log('Player Name:', playerNameValue);  
  console.log('Selected Difficulty:', difficultySelect.value);
  
  if (validPlayerName && difficultySelect) {
    if (difficultySelect.value == ""){
      messageError('Please choose a Difficulty');
      return false;
    }

    if (localStorage.getItem("Username") == playerNameValue) {
      console.log('User already exists');
      messageError('User already exists. Choose a different name.');
    } else {
      console.log('Saving user information to localStorage');
      localStorage.setItem("Username", playerNameValue);
      localStorage.setItem("Difficulty", difficultySelect.value);
      messageAprobe("Saved!", "You can play now")

      // restartGame();
      hideFormShowInstructions();
    }
    
  } 
}


function validatePlayerName(name) {
  console.log('Validating Player Name:', name);
  if (!name) {
    console.log('Empty name not valid');
    messageError('Empty name not valid');
    return false;
  }

  if (name.length < 5 || name.length > 10) {
    console.log('Name must be 5-10 characters long.');
    messageError('Name must be 5-10 characters long.');
    return false;
  }

  if (!/[A-Z]/.test(name)) {
    console.log('Name needs an uppercase letter.');
    messageError('Name needs an uppercase letter.');
    return false;
  }

  if (!/\d/.test(name)) {
    console.log('Name needs a number.');
    messageError('Name needs a number.');
    return false;
  }

  return true;
}

export function playAnonymously() {
  console.log('Play Anonymously button clicked');
  const anonymousName = "Anonymous Player";
  const selectedDifficulty = document.getElementById('difficulty').value;

  localStorage.setItem("Username", anonymousName);
  localStorage.setItem("Difficulty", selectedDifficulty);
  messageAprobe("Playing anonymously", "Scores will not be saved.")
  // restartGame(); 
  hideFormShowInstructions();
}



function hideFormShowInstructions() {
  const containerBannerImgAndForm = document.getElementById("containerBannerImgAndForm")
  const instructionsAndPlay = document.getElementById("instructionsAndPlay")
  containerBannerImgAndForm.style.display = 'none';
  instructionsAndPlay.style.display = 'block'
}

// añadido? yass
export function startGame() {
  console.log('Start Game function called');
  const playerName = localStorage.getItem('Username');
  const selectedDifficulty = localStorage.getItem('Difficulty');

  if (playerName && selectedDifficulty) {
    hideFormAndShowGame();
    showRandomImages();
    initializeCountdown(selectedDifficulty);
  } else {
    messageError('Please enter your name and choose a difficulty level.');
  }
}


// function hideFormAndShowGame() {
//   const nameContainer = document.getElementById('nameContainer');
//   nameContainer.style.display = 'none';

//   const gameContainer = document.getElementById('gameContainer');
//   gameContainer.style.display = 'block';

//   // Inicia el temporizador cuando se muestra el juego
//   const selectedDifficulty = localStorage.getItem('Difficulty');
//   initializeCountdown(selectedDifficulty);
// }


// function restartGame() {
//   const startButton = document.getElementById('startButton');
//   const restartButton = document.getElementById('restartButton');

//   hideGameButtons();
//   hideFormAndShowGame();
//   startGame(localStorage.getItem('Difficulty'));

//   restartButton.style.display = 'none';
// }



function messageAprobe(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: "success"
  });
}

function messageError(customMessage) {
  console.log('messageError called with:', customMessage);
  Swal.fire({
    icon: "error",
    title: "Error",
    text: customMessage,
  });
}


