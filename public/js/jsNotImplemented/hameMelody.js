const easyMelody = "./ruta a la música que elijamos";
const normalMelody = "./";
const hardMelody = "./";

let audio = new Audio();

function startMelody(difficulty) {

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

    audio.src = melody;
    audio.play();
  
    setTimeout(function() {
      audio.pause();
    }, duration * 1000);
  }
  
  document.getElementById('startGame').addEventListener('click', function() {
    let difficulty = 'easy';
    startMelody(difficulty);
  });