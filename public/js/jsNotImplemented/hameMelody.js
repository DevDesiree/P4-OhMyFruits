const easyMelody = "./ruta a la música que elijamos";
const normalMelody = "./";
const hardMelody = "./";

let audio = new Audio();

function startMelody(difficulty) {
    // Elige la melodía y la duración en función de la dificultad
    let melody, duration;
    switch (difficulty) {
      case 'easy':
        melody = easyMelody;
        duration = 120;
        break;
      case 'normal':
        melody = normalMelody;
        duration = 50;
        break;
      case 'hard':
        melody = hardMelody;
        duration = 30;
        break;
    }
  
    // Configura la melodía y comienza a reproducirla
    audio.src = melody;
    audio.play();
  
    // Detén la melodía después de la duración especificada
    setTimeout(function() {
      audio.pause();
      // Aquí puedes hacer cualquier limpieza necesaria después de que la melodía se detenga
    }, duration * 1000);
  }
  
  // Vincula la función startMelody al evento de clic del botón startGame
  document.getElementById('startGame').addEventListener('click', function() {
    // Determina la dificultad del juego y la pasa a la función startMelody
    let difficulty = 'easy'; // reemplaza esto con la lógica para determinar la dificultad
    startMelody(difficulty);
  });