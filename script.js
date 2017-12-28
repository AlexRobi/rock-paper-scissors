let score = {
  playerScore: 0,
  computerScore: 0,
  tieScore: 0,
  updateScore: function() {
    document.getElementById("player-score").textContent = this.playerScore;
    document.getElementById("computer-score").textContent = this.computerScore;
    document.getElementById("tie-score").textContent = this.tieScore;
  },
};

let playerVersus = document.getElementById("player-versus");
let computerVersus = document.getElementById("computer-versus");
let versus = document.getElementById("versus");
let information = document.getElementById("information");
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
  let beforePlayerRound = score.playerScore;
  let beforeComputerRound = score.computerScore;

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

  score.updateScore();

  if (score.playerScore === 5) {
    information.textContent = "YOU WIN THE GAME!";
    resetScore(score);
  } else if (score.computerScore === 5) {
    information.textContent = "YOU LOST THE GAME!";
    resetScore(score);
  };
};

function resetScore(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = 0;
    };
  };
};

function removeClass(item) {
  item.classList.remove("rock", "paper", "scissors", "none", "win", "lose", "tie", "default");
};

function loseRound() {
  setTimeout(function() {
    versus.classList.remove("win");
    versus.classList.add("default");
  }, 1500);
  information.textContent = `YOU LOSE THE ROUND!\r\n${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}.`;
  score.computerScore += 1;
  versus.classList.add("lose");
  setTimeout(function() {
    versus.classList.remove("lose");
    versus.classList.add("default");
  }, 1400);
};

function winRound() {
  information.textContent = `YOU WIN THE ROUND!\r\n${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`;
  score.playerScore += 1;
  versus.classList.add("win");
  setTimeout(function() {
    versus.classList.remove("win");
    versus.classList.add("default");
  }, 1400);
};

function tieRound() {
  information.textContent = "IT'S A TIE ROUND!";
  score.tieScore += 1;
  versus.classList.add("tie");
  setTimeout(function() {
    versus.classList.remove("tie");
    versus.classList.add("default");
  }, 1400);
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
