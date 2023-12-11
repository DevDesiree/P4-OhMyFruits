// Al cargar la página
window.onload = function() {
    // Obtén la fecha y hora actuales
    let now = new Date().getTime();
  
    // Comprueba si ya existe un registro de juego en localStorage
    let playerGameTime = localStorage.getItem('playerGameTime');
    let playerGamePlaying = localStorage.getItem('playerGamePlaying');
  
    if (playerGameTime) {
      // Si existe, conviértelo a número
      playerGameTime = Number(playerGameTime);
  
      // Comprueba si el último juego fue hace más de 24 horas
      if (now - playerGameTime > 24*60*60*1000) {
        // Si es así, permite jugar y actualiza el timestamp
        playerGameTime = now;
        playerGamePlaying = 'true';
      } else if (now - playerGameTime < 60*60*1000) {
        // Si el último juego fue hace menos de una hora, permite seguir jugando
        playerGamePlaying = 'true';
      } else {
        // Si el último juego fue hace más de una hora pero menos de 24 horas, bloquea el juego
        playerGamePlaying = 'false';
      }
    } else {
      // Si no existe un registro de juego, crea uno y permite jugar
      playerGameTime = now;
      playerGamePlaying = 'true';
    }
  
    // Guarda el estado del juego en localStorage
    localStorage.setItem('playerGameTime', String(playerGameTime));
    localStorage.setItem('playerGamePlaying', playerGamePlaying);
  
    // Comprueba si se permite jugar
    if (playerGamePlaying === 'false') {
      alert('You have played for an hour today. Please come back tomorrow.');
      // Aquí puedes redirigir a otra página o hacer lo que necesites para bloquear el juego
    }
  };