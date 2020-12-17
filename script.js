const userSelections = document.querySelector(".gameBoard-userSelection");
const summaryMessage = document.querySelector(".gameHeader-summaryMessage");
const playerScoreDisplay =
    document.querySelector(".gameHeader-playerScore .score");
const computerScoreDisplay =
    document.querySelector(".gameHeader-computerScore .score");
let computerScore = 0;
let playerScore = 0;

// Event listeners:
userSelections.addEventListener("click", getPlayerMove);

function getPlayerMove(event) {
  const move = event.target.getAttribute("data-move");

  if (!move) return;

  playRound(move, computerPlay());
}

function computerPlay() {
  let possibleChoices = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * possibleChoices.length);
  let computerChoice = possibleChoices[randomIndex];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  // rock beats scissor
  // paper beats rock
  // scissor beats paper
  if (playerScore === 5 || computerScore === 5) return;

  let message = "";
  playerSelection = playerSelection[0].toUpperCase() +
      playerSelection.slice(1);

  if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")) {
      message = `You win! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
  } else if (playerSelection === computerSelection) {
    message =
      `Tie game! ${playerSelection} and ${computerSelection} are equal`;
  } else {
    message = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }

  summaryMessage.textContent = (playerScore === 5) ? "You are the winner!" :
      (computerScore === 5) ? "You lost to a computer :(" : message;
}