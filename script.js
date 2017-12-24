// Declare the variables needed.
let playerRounds = 0;
let computerRounds = 0;
let tieRounds = 0;
let playerVersus = document.getElementById("player-versus");
let computerVersus = document.getElementById("computer-versus");
let versus = document.getElementById("versus");
let information = document.getElementById("information");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let tieScore = document.getElementById("tie-score");

const choices = document.querySelectorAll(`button[class="btn btn-outline-dark"]`);
choices.forEach(choice => choice.onclick = function() {
  let playerSelection = choice.id;
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

function computerPlay() {
  let possibleChoices = ["rock", "paper", "scissors"];
  // Generate a random index number by taking a floating point number (between 0 and 1)
  // then multiply it by the length the length of possibleChoices and convert it
  // it to an integer.
  return possibleChoices[Math.floor(possibleChoices.length * Math.random())];
};

function playRound(playerSelection, computerSelection) {
  playerVersus.classList.remove("rock", "paper", "scissors", "none");
  computerVersus.classList.remove("rock", "paper", "scissors", "none");
  versus.classList.remove("win", "lose", "tie", "default");
  playerVersus.classList.add(`${playerSelection}`);
  computerVersus.classList.add(`${computerSelection}`);
  let beforePlayerRound = playerRounds;
  let beforeComputerRound = computerRounds;
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      information.textContent = ("YOU LOSE!\r\nPaper beats Rock.");
      computerRounds++;
    } else if (computerSelection === "scissors") {
      information.textContent = ("YOU WIN!\r\nRock beats Scissors.");
      playerRounds++;
    } else {
      information.textContent = ("IT'S A TIE!");
      tieRounds++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      information.textContent = ("YOU LOSE!\r\nScissors beats Paper.");
      computerRounds++;
    } else if (computerSelection === "rock") {
      information.textContent = ("YOU WIN!\r\nPaper beats Rock.");
      playerRounds++;
    } else {
      information.textContent = ("IT'S A TIE!");
      tieRounds++;
    }
  } else {
    if (computerSelection === "rock") {
      information.textContent = ("YOU LOSE!\r\nRock beats Scissors.");
      computerRounds++;
    } else if (computerSelection === "paper") {
      information.textContent = ("YOU WIN!\r\nScissors beats Paper.");
      playerRounds++;
    } else {
      information.textContent = ("IT'S A TIE!");
      tieRounds++;
    }
  }
  // Checks who won the round.
  if (playerRounds > beforePlayerRound) {
    versus.classList.add("win");
  } else if (computerRounds > beforeComputerRound) {
    versus.classList.add("lose");
  } else {
    versus.classList.add("tie");
  };

  playerScore.textContent = playerRounds;
  computerScore.textContent = computerRounds;
  tieScore.textContent = tieRounds;
}
