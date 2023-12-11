//function stopGameAndReturnHome(params) {
//clearTimeout(gameTimer);
//  console.log("Game has been stopped.");
//}

// Suponiendo que tienes un temporizador y animaciones para las frutas
let gameTimer;
let fruitAnimations = [];

// Función para detener el juego y mostrar la pantalla de inicio
function stopGameAndShowHomeScreen() {
  // Detener el temporizador del juego
  clearTimeout(gameTimer);
  console.log("Game timer has been stopped.");

  // Detener todas las animaciones de las frutas
  fruitAnimations.forEach(animation => animation.pause());
  console.log("Fruit animations have been stopped.");

  // Aquí iría tu código para guardar el puntaje, si es necesario
  // ...

  // Mostrar la pantalla de inicio
  document.getElementById("gameScreen").style.display = 'none';
  document.getElementById("homeScreen").style.display = 'block';
  console.log("Displaying the game's home screen.");
}

// Función para continuar el juego
function continueGame() {
  // Aquí iría tu código para reanudar el temporizador y las animaciones
  gameTimer = setTimeout(endGame, 30000); // Reanudar el temporizador por 30 segundos
  fruitAnimations.forEach(animation => animation.play());
  console.log("Continuing the game and fruit animations.");
}

// Función para manejar el evento de clic en el botón "quitButton"
function handleQuitButtonClick() {
  // Mostrar un diálogo de confirmación al usuario
  if (confirm("Are you sure you want to quit the game?")) {
    stopGameAndShowHomeScreen(); // El usuario eligió "Yes", detener el juego
  } else {
    continueGame(); // El usuario eligió "No", continuar el juego
  }
}

// Agregar un evento de clic al botón "quitButton"
const quitButton = document.getElementById("quitButton");
quitButton.addEventListener("click", handleQuitButtonClick);