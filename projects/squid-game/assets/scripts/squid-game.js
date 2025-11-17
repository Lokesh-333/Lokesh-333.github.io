import { originalContent } from './main.js';
import { updateHighestScore } from './score.js'; 
import { gameOver } from './eliminated-page.js';

// we are using fetch (to get the html) thats why we have to wait for response, so we are using async await...
export async function startGame(){
  const response = await fetch('./squid-game.html');
  const html = await response.text();
  const display = document.querySelector('.js-display');
  display.innerHTML = html;
  let bgColorContainer = document.querySelector('.js-bg-color-container');
  let clickButton = document.querySelector('.js-click-button');
  let scoreDisplay = document.querySelector('.js-score-display');
  let score = 0;
  let previousHighestScore = Number(localStorage.getItem('previousHighestScore')) || 0;
  let bgColor = 'green';
  let timeoutId;
  // we dont want the game to be running when we exit (when clicked on back-button)
  document.querySelector('.js-back-button')
    .addEventListener('click', ()=>{
      clearTimeout(timeoutId);
      display.innerHTML = originalContent;
    });
  
  clickButton.addEventListener('click', ()=>{
    if(bgColor === 'red'){
      clearTimeout(timeoutId);
      if(score > previousHighestScore){
        let NewHighestScore = score;
        updateHighestScore(NewHighestScore);
      }
      gameOver(score, previousHighestScore);
    }
    else{
      score += 1;
      scoreDisplay.innerHTML = `Score : ${score}`;
    }
  })
  /*
   * here the logic is keep playing the game, until there is click event when background color is red
   * i.e background color red && click => exit game
   */

  gameLoop();

  function gameLoop(){
    bgColorContainer.classList.toggle('turn-red');
    if(bgColor === 'red'){
      bgColor = 'green';
    }
    else{
      bgColor = 'red';
    }
    let randomDelay = Math.random() * 3000;
    timeoutId = setTimeout(gameLoop, randomDelay);
  } 
}
