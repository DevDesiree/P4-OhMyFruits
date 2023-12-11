
import { showRandomImages } from "./game.js";

/**
 * Maneja el evento de clic en el botón de guardar nombre.
 * @param {Event} event - Objeto de evento generado por el clic del botón.
 * 
 * Lo que hace la siguiente funcion es por defecto prevenir que se envie el formulario 
 * Obtiene el elemento de entrada del id playerName
 * Limpiar el valor de player name y lo valida usando la funcion validateplayername
 * Si pasa la verificacion guarda los datos en LocalStorage
 * 
 */

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


/**
 * Valida el nombre del jugador según ciertos criterios.
 * @param {string} name - Nombre del jugador a validar.
 * @returns {boolean} - Devuelve true si el nombre es válido, de lo contrario, false.
 */

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

/**
 * Inicia el juego de forma anónima al hacer clic en el botón correspondiente.
 * Se establece un nombre de jugador anónimo, y se oculta el formulario.
 */
export function playAnonymously() {
  console.log('Play Anonymously button clicked');
  const anonymousName = "Anonymous Player";

  localStorage.setItem("Username", anonymousName);

  messageAprobe("Playing anonymously", "Scores will not be saved.")
  // restartGame(); 
  hideFormShowInstructions();
}


/**
 * Oculta el formulario de juego y muestra las instrucciones.
 */
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


/**
 * Muestra un mensaje de aprobación o error utilizando SweetAlert.
 * @param {string} title - Título del mensaje.
 * @param {string} text - Texto del mensaje.
 * @param {string} customMessage - Mensaje de error personalizado.
 */

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


