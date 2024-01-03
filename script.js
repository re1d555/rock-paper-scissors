let score = 0;
const gameRes = document.querySelector('.gameResult');
const res = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
const buttonsDiv = document.querySelector('.playBtn');

function getComputerChoice() {
let randomChoice = (Math.floor(Math.random() * 3));
  if (randomChoice === 0) {
    return compRandom = 'Rock';
  } else if (randomChoice === 1) {
    return compRandom = 'Paper';
  } else {
    return compRandom = 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || 
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    return score += 1, result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (computerSelection === playerSelection) {
    return result = 'It`s a Tie!';
  } else {
    return score += -1, result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function gameScore() {
  if (score === 5) {
    gameRes.innerText = `Game score: ${score}, You WIN!`;
  } else if (score === -5) {
    gameRes.innerText = `Game score: ${score}, You LOSE!`;
  } 
}

buttons.forEach((button) => {
  button.addEventListener('click', () =>{
   const playerChoice = button.value;
   const computerChoice = getComputerChoice();
   res.innerText = playRound(playerChoice, computerChoice)
   gameScore()
   if (gameRes.innerText != '') {
    const reset = document.createElement('button');
    reset.addEventListener('click', () => {
      score = 0;
      document.querySelectorAll('.btn').forEach((button) => button.disabled = false);
      gameRes.innerText = '';
      buttonsDiv.removeChild(reset);
    })
    reset.textContent = 'Reset The Tournament';
    reset.style.width = '100px';
    buttonsDiv.appendChild(reset);
    document.querySelectorAll('.btn').forEach((button) => button.disabled = true);
    res.innerText = '';
   }
  });
});


