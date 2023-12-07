
export function saveName(event) {
  event.preventDefault()
  const playerNameInput = document.getElementById('playerName');
  const playerNameValue = playerNameInput.value.trim();
  const validPlayerName = validatePlayerName(playerNameValue);
  if (validPlayerName) {
    if (localStorage.getItem("Username", playerNameValue)) {
      messageError('User already exists. Choose a different name.')
    } else {
      localStorage.setItem("Username", playerNameValue);
      messageAprobe("Name Saved!", "You can play now")
      hideForm()
    }
  }
}

function validatePlayerName(name) {
  if (!name) {
    messageError('Empty name not valid')
    return false

  } else if (name) {
    if (name.length < 5 || name.length > 10) {
      messageError('Name must be 5-10 characters long.')
      return false
    }
    if (!/[A-Z]/.test(name)) {
      messageError('Name needs an uppercase letter.')
      return false
    }
    if (!/\d/.test(name)) {
      messageError('Name needs a number.')
      return false
    }
    return true;
  }
}

export function playAnonymously() {
  messageAprobe("Playing anonymously", "Scores will not be saved.")
  hideForm()
}


//Logica para ocultar el Form
function hideForm() {
  console.log("Test");

}

// Funciones para sweetAlert
function messageAprobe(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: "success"
  });
}

function messageError(error) {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: error,
  });
}
