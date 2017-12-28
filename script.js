let score = [0, 0, 0]
let playerVersus = document.getElementById("player-versus");
let computerVersus = document.getElementById("computer-versus");
let versus = document.getElementById("versus");
let information = document.getElementById("information");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let tieScore = document.getElementById("tie-score");
let playerSelection = null;
let computerSelection = null;

const choices = document.querySelectorAll(`button[class="btn btn-outline-dark"]`);
choices.forEach(choice => choice.onclick = function() {
  playerSelection = choice.id
  computerSelection = computerPlay();
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
  removeClass(playerVersus);
  removeClass(computerVersus);
  removeClass(versus);
  playerVersus.setAttribute('class', `far fa-hand-${playerSelection}`)
  computerVersus.setAttribute('class', `far fa-hand-${computerSelection}`)
  let beforePlayerRound = score[0];
  let beforeComputerRound = score[1];

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      loseRound();
    } else if (computerSelection === "scissors") {
      winRound();
    } else {
      information.textContent = ("IT'S A TIE!");
      tieRound();
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      loseRound();
    } else if (computerSelection === "rock") {
      winRound();
    } else {
      tieRound();
    }
  } else {
    if (computerSelection === "rock") {
      loseRound();
    } else if (computerSelection === "paper") {
      winRound();
    } else {
      tieRound();
    }
  };

  playerScore.textContent = score[0];
  computerScore.textContent = score[1];
  tieScore.textContent = score[2];

  if (score[0] === 5) {
    information.textContent = "YOU WIN THE GAME!";
    score = [0, 0, 0];
  } else if (score[1] === 5) {
    information.textContent = "YOU LOST THE GAME!";
    score = [0, 0, 0];
  };
};

function removeClass(item) {
  item.classList.remove("rock", "paper", "scissors", "none", "win", "lose", "tie", "default");
};

function loseRound() {
  information.textContent = `YOU LOSE THE ROUND!\r\n${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}.`;
  score[1] += 1;
  versus.classList.add("lose");
};

function winRound() {
  information.textContent = `YOU WIN THE ROUND!\r\n${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`;
  score[0] += 1;
  versus.classList.add("win");
};

function tieRound() {
  information.textContent = "IT'S A TIE ROUND!";
  score[2] += 1;
  versus.classList.add("tie");
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
