
export function saveName(event) {

  event.preventDefault();
  const playerNameInput = document.getElementById('playerName');
  const playerNameValue = playerNameInput.value.trim();
  const validPlayerName = validatePlayerName(playerNameValue);

  const difficultySelect = document.getElementById('difficulty');
  
  if (validPlayerName && difficultySelect) {
    if (difficultySelect.value == ""){
      messageError('Please choose a Difficulty');
      return false;
    }

    if (localStorage.getItem("Username") == playerNameValue) {
      messageError('User already exists. Choose a different name.');
    } else {
      localStorage.setItem("Username", playerNameValue);
      localStorage.setItem("Difficulty", difficultySelect.value);
      messageAprobe("Saved!", "You can play now")
      hideFormShowInstructions();
    }
  } 
}


function validatePlayerName(name) {
  if (!name) {
    messageError('Empty name not valid');
    return false;
  }

  if (name.length < 5 || name.length > 10) {
    messageError('Name must be 5-10 characters long.');
    return false;
  }

  if (!/[A-Z]/.test(name)) {
    messageError('Name needs an uppercase letter.');
    return false;
  }

  if (!/\d/.test(name)) {
    messageError('Name needs a number.');
    return false;
  }

  return true;
}

export function playAnonymously() {
  const anonymousName = "Anonymous Player";

  localStorage.setItem("Username", anonymousName);
  localStorage.setItem("Difficulty", "");

  messageAprobe("Playing anonymously", "Scores will not be saved.")
  hideFormShowInstructions();
}


function hideFormShowInstructions() {
  const containerBannerImgAndForm = document.getElementById("containerBannerImgAndForm")
  const instructionsAndPlay = document.getElementById("instructionsAndPlay")
  containerBannerImgAndForm.style.display = 'none';
  instructionsAndPlay.style.display = 'block'
}

function messageAprobe(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: "success"
  });
}

function messageError(customMessage) {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: customMessage,
  });
}


