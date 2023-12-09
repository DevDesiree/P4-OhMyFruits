let button = document.getElementById("howToPlayButton");
let instructions = document.getElementById("instructions");

// Añadir un evento al botón para que al hacer clic se muestre el texto
button.addEventListener("click", function() {
  // Cambiar el estilo del elemento con el texto a display: block
  instructions.style.display = "block";
});