export function updateHighestScore(newHighestScore){
  document.querySelector('.js-highest-score').innerHTML = `HIGHEST SCORE : ${newHighestScore}`;
  localStorage.setItem('previousHighestScore', newHighestScore);
}
