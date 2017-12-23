const choices = document.querySelectorAll(`button[class="btn btn-outline-dark"]`);
let playerRounds = 0;
let computerRounds = 0;
let tieRounds = 0;
// Select and declate the html needed
playerVersus = document.getElementById("player-versus");
computerVersus = document.getElementById("computer-versus");
versus = document.getElementById("versus");
info = document.getElementById("info");
containerInfo = document.getElementById("container-info");

choices.forEach(choice => choice.onclick = function() {
  const playerSelection = choice.id;
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

function computerPlay() {
  let computerChoices = ["rock", "paper", "scissors"];
  let random = Math.random();
  random *= computerChoices.length;
  random = Math.floor(random);
  return(computerChoices[random])
}

function playRound(playerSelection, computerSelection) {
  playerVersus.classList.remove("rock", "paper", "scissors", "none");
  computerVersus.classList.remove("rock", "paper", "scissors", "none");
  versus.classList.remove("win", "lose", "tie", "default")
  // Add an image of the player selection with a class
  playerVersus.classList.add(`${playerSelection}`);
  computerVersus.classList.add(`${computerSelection}`);
  let beforeplayerRounds = playerRounds;
  let beforecomputerRounds = computerRounds;
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      info.textContent = ("YOU LOSE!\r\nPaper beats Rock.");
      computerRounds++
    } else if (computerSelection === "scissors") {
      info.textContent = ("YOU WIN!\r\nRock beats Scissors.");
      playerRounds++
    } else {
      info.textContent = ("IT'S A TIE!");
      tieRounds++
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      info.textContent = ("YOU LOSE!\r\nScissors beats Paper.");
      computerRounds++
    } else if (computerSelection === "rock") {
      info.textContent = ("YOU WIN!\r\nPaper beats Rock.");
      playerRounds++
    } else {
      info.textContent = ("IT'S A TIE!");
      tieRounds++
    }
  } else {
    if (computerSelection === "rock") {
      info.textContent = ("YOU LOSE!\r\nRock beats Scissors.");
      computerRounds++
    } else if (computerSelection === "paper") {
      info.textContent = ("YOU WIN!\r\nScissors beats Paper.")
      playerRounds++
    } else {
      info.textContent = ("IT'S A TIE!");
      tieRounds++
    }
  }
  // Checks the result of the round and apply the css accordodly.
  if (playerRounds > beforeplayerRounds) {
    versus.classList.add("win");
  } else if (computerRounds > beforecomputerRounds) {
    versus.classList.add("lose");
  } else {
    versus.classList.add("tie");
  }

  playerScore = document.getElementById("player-score");
  computerScore = document.getElementById("computer-score");
  tieScore = document.getElementById("tie-score");
  playerScore.textContent = playerRounds;
  computerScore.textContent = computerRounds;
  tieScore.textContent = tieRounds;
}
