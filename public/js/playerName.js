document.addEventListener('DOMContentLoaded', function() {
    const saveNameButton = document.getElementById('SaveName');
    const messageDiv = document.getElementById('nameContainer'); 
    const playerNameInput = document.getElementById('PlayerName');
    const scoreDiv = document.getElementById('Score');
  
    saveNameButton.onclick = function() {
      const playerName = playerNameInput.value.trim();
      const message = validatePlayerName(playerName);
      if (!message) {
        if (localStorage.getItem(playerName)) {
          messageDiv.textContent = 'User already exists. Choose a different name.';
        } else {
          localStorage.setItem(playerName, 0);
          messageDiv.textContent = 'Name saved! You can play now.';
        }
      } else {
        messageDiv.textContent = message;
      }
    };
  
    document.getElementById('PlayAnonymously').onclick = function() {
      messageDiv.textContent = 'Playing anonymously. Scores will not be saved.';
    };
  
    function validatePlayerName(name) {
      if (name.length < 5 || name.length > 10) return 'Name must be 5-10 characters long.';
      if (!/[A-Z]/.test(name)) return 'Name needs an uppercase letter.';
      if (!/\d/.test(name)) return 'Name needs a number.';
      return '';
    }
  
    window.endGame = function(score) {
      const playerName = playerNameInput.value.trim();
      if (playerName && !validatePlayerName(playerName) && localStorage.getItem(playerName)) {
        localStorage.setItem(playerName, score);
        scoreDiv.textContent = 'Total Score: ' + score;
      }
    };
  });
