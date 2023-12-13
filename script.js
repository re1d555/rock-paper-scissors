// computer randomly made a choice 0, 1 or 2
// if 0 then its rock
// if 1 then its paper
// if 2 then its scissors
// return value

function getComputerChoice() {
let randomChoice = (Math.floor(Math.random() * 3));
  if (randomChoice === 0) {
    return compRandom = 'rock';
  } else if (randomChoice === 1) {
    return compRandom = 'paper';
  } else {
    return compRandom = 'scissors';
  }
}

// player win if (p === rock and c === scissors) or (p === paper and c == rock) or (p === scissors and c === paper)
// if p === c then its TIE
// if TIE need to play another round
// else computer win

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
    return score += 1, result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (computerSelection === playerSelection) {
    return  tieScore +=1, result = 'It`s a Tie! Re-playing the round';
  } else {
    return score += -1, result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// ask player in prompt for input (rock or paper or scissors)
// launch game and result (win or lose or tie) on console
// it repeat 5 times
// if gameScore > 0 player win on a console
// else if gameScore = 0 it's a tie on a console
// else player lose on a console

function gameScore() {
  if (score > 0) {
    console.log(`Game score: ${score}, You WIN in best-of-five series!`)
  } else if (score < 0) {
    console.log(`Game score: ${score}, You LOSE in best-of-five series!`)
  } else {
    console.log(`Game score: ${score}, You TIE in best-of-five series!`)
  }
}

function game() {
    let attempt = 5;
  for (i = 1; i <= attempt; i++) {
    attempt = 5 + tieScore;
    playerSelection = prompt('Your choice?');
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  gameScore();
}

let score = 0;
let tieScore = 0;

game();

