let score = 0;
let computerScore = 0;
const gameRes = document.querySelector('.gameResult');
const res = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
const buttonsDiv = document.querySelector('.playBtn');
const resDiv = document.querySelector('.gameRes');
const playerCount = document.querySelector('.player');
const computerCount = document.querySelector('.computer');

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
    return computerScore += 1, result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function gameScore() {
  if (score === 5) {
    gameRes.innerText = `Player score: ${score}, You WIN!`;
  } else if (computerScore === 5) {
    gameRes.innerText = `Computer score: ${computerScore}, You LOSE!`;
  } 
}

function gameReset() {
  if (gameRes.innerText != '') {
    const reset = document.createElement('button');
    reset.addEventListener('click', () => {
      score = 0;
      computerScore = 0;
      document.querySelectorAll('.btn').forEach((button) => button.disabled = false);
      gameRes.innerText = '';
      playerCount.innerText = 'Player: ';
      computerCount.innerText = 'Computer: ';
      resDiv.removeChild(reset);
    })
    reset.textContent = 'Reset The Tournament';
    reset.setAttribute('style', 'width: 130px; height: 60px; border-radius: 10px; font-weight: bold');
    resDiv.appendChild(reset);
    document.querySelectorAll('.btn').forEach((button) => button.disabled = true);
    res.innerText = '';
   }
}

buttons.forEach((button) => {
  button.addEventListener('click', () =>{
   const playerChoice = button.value;
   const computerChoice = getComputerChoice();
   res.innerText = playRound(playerChoice, computerChoice)
   gameScore()
   playerCount.innerText = `Player: ${score}`;
   computerCount.innerText = `Computer: ${computerScore}`;
   gameReset()
  });
});