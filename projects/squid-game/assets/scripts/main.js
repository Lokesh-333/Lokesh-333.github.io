import { startGame } from './squid-game.js';
import { updateHighestScore } from './score.js'; 

// if there was any previous score we load it
updateHighestScore(Number(localStorage.getItem('previousHighestScore')));

// if we were to come back from home, we need home page html
export const originalContent = document.querySelector('.js-display').innerHTML;

// when we click on start game, it will call startGame() ...
document.querySelector('.js-display')
  .addEventListener('click', (event) => {
      if (event.target.classList.contains('js-start-game-button')) {
        startGame();
      }
  });
