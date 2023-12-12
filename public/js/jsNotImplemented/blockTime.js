
window.onload = function() {
    
    let now = new Date().getTime();
  
    let playerGameTime = localStorage.getItem('playerGameTime');
    let playerGamePlaying = localStorage.getItem('playerGamePlaying');
  
    if (playerGameTime) {

      playerGameTime = Number(playerGameTime);
  
      if (now - playerGameTime > 24*60*60*1000) {
        playerGameTime = now;
        playerGamePlaying = 'true';

      } else if (now - playerGameTime < 60*60*1000) {
        playerGamePlaying = 'true';

      } else {
        playerGamePlaying = 'false';
      }

    } else {
      playerGameTime = now;
      playerGamePlaying = 'true';
    }
  
    localStorage.setItem('playerGameTime', String(playerGameTime));
    localStorage.setItem('playerGamePlaying', playerGamePlaying);
  
    if (playerGamePlaying === 'false') {
      alert('You have played for an hour today. Please come back tomorrow.');
      
    }
  };