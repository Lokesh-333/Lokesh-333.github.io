import { originalContent } from './main.js';
import { startGame } from './squid-game.js';

export async function gameOver(score, previousHighestScore){
  const response = await fetch('./eliminated-page.html');
  const html = await response.text();
  document.querySelector('.js-display').innerHTML = html;
  
  let finalScore = document.querySelector('.js-final-score');

  if(score > previousHighestScore){
    finalScore.innerHTML = `
    Bingo! You Beat the Highest Score.
    <h3>New Highest SCORE : ${score}</h3>
    `
  }
  else{
    finalScore.innerHTML = `SCORE : ${score}`;
  }

  document.querySelector('.js-return-to-home-button')
    .addEventListener('click', ()=>{
      document.querySelector('.js-display').innerHTML = originalContent;
    });

  document.querySelector('.js-play-again-button')
    .addEventListener('click', startGame);
}
