function getComputerChoice() {
  let random = Math.trunc(Math.random() * 3);
  //console.log(random);
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  let playerSelection1 = playerSelection.toLowerCase();
  let text;

  if (playerSelection1 === computerSelection) {
    text = `You Tied! ${playerSelection1} = ${computerSelection}`;
    return text;
  } else {
    switch (playerSelection1) {
      case "rock":
        computerSelection === "scissors"
          ? (text = "You Won! Rock beats Scissors")
          : (text = "You Lose! Paper beats Rock");
        return text;

      case "scissors":
        computerSelection = "paper"
          ? (text = "You Won! Scissors beats Paper")
          : (text = "You Lose! Rock beats Scissors");
        return text;

      case "paper":
        computerSelection = "rock"
          ? (text = "You Won! Paper beats Rock")
          : (text = "You Lose! Scissors beats Paper");
        return text;
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
