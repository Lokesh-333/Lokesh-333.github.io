let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
let playerMove = '';
let computerMove = '';
let result = '';
displayScore();
let rockButton = document.querySelector('.js-rock-button');
rockButton.addEventListener('click', () => {
  playerMove = 'rock';
  playGame();
});

let paperButton = document.querySelector('.js-paper-button');
paperButton.addEventListener('click', () => {
  playerMove = 'paper';
  playGame();
});

scissorButton = document.querySelector('.js-scissor-button');
scissorButton.addEventListener('click', () => {
  playerMove = 'scissor';
  playGame();
});

function decideComputerMove(computerMove) {
  const num = Math.random();
  if (num >= 0 && num < 1 / 3) {
    computerMove = 'rock';
  }
  else if (num >= 1 / 3 && num < 2 / 3) {
    computerMove = 'paper';
  }
  else if (num >= 2 / 3 && num < 1) {
    computerMove = 'scissor';
  }
  return computerMove;
}

// it evaluates the playerMove and computerMove
function playGame() {
  computerMove = decideComputerMove(computerMove);
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Its a tie!';
    }
    else if (computerMove === 'paper') {
      result = 'You lose!';
    }
    else if (computerMove === 'scissor') {
      result = 'You win!';
    }
  }
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win!';
    }
    else if (computerMove === 'paper') {
      result = 'Its a tie!';
    }
    else if (computerMove === 'scissor') {
      result = 'You lose!';
    }
  }
  else if (playerMove === 'scissor') {
    if (computerMove === 'rock') {
      result = 'You lose!';
    }
    else if (computerMove === 'paper') {
      result = 'You win!';
    }
    else if (computerMove === 'scissor') {
      result = 'Its a tie!';
    }
  }

  displayMoves(playerMove, computerMove);
  displayScore(result);
}

function displayMoves(playerMove, computerMove) {
  let movesDisplay = document.querySelector('.js-moves-display');
  movesDisplay.innerHTML = `
    You <img class="css-gen-move" src="assets/images/${playerMove}-icon.png"> - <img class="css-gen-move" src="assets/images/${computerMove}-icon.png"> Computer>
  `;
}

function displayScore(result) {
  let scoreDisplay = document.querySelector('.js-score-display');

  if (result === 'You win!') {
    score.wins++;
  }
  else if (result === 'You lose!') {
    score.losses++;
  }
  else if (result === 'Its a tie!') {
    score.ties++;
  }
  scoreDisplay.innerHTML = `
    Wins : ${score.wins} Losses : ${score.losses} Ties : ${score.ties}
  `;
  interactivePlay();
  localStorage.setItem('score', JSON.stringify(score));
}

let resetScore = document.querySelector('.js-reset-score-button');
resetScore.addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  result = '';
  document.querySelector('.js-moves-display')
    .innerHTML = 'Select a move to start the game';
  displayScore(result);
});

let autoPlay = document.querySelector('.js-auto-play-button');


let ids = 0;
autoPlay.addEventListener('click', () => {
  if (ids === 0) {
    ids = setInterval(() => {
      playerMove = decideComputerMove();
      playGame();
    }, 1000);
    autoPlay.innerHTML = 'Stop Auto play'
  }
  else {
    clearInterval(ids);
    ids = 0;
    autoPlay.innerHTML = 'Auto play'
  }
});


// new feature, when we win, a green border will be visible for 2sec
// if we lose, a red border will be visible for 2 sec
// if its tie, a grey border will be visible for 2 sec

function interactivePlay() {

  if (playerMove) {
    // to know the move button of player so to shine it...
    let moveButton;
    if (playerMove === 'rock') {
      moveButton = rockButton;
    }
    else if (playerMove === 'paper') {
      moveButton = paperButton;
    }
    else if (playerMove === 'scissor') {
      moveButton = scissorButton;
    }

    // to keep the shine, based on winning and losing
    let borderClass;
    if (result === 'You win!') {
      borderClass = 'green-border';
    }
    else if (result === 'You lose!') {
      borderClass = 'red-border';
    }
    else if (result === 'Its a tie!') {
      borderClass = 'grey-border';
    }

    moveButton.classList.add(borderClass);
    setTimeout(() => {
      moveButton.classList.remove(borderClass);
    }, 1000);
  }

}
