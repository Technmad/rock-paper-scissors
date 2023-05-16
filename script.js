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
          ? ((text = "You Won! Rock beats Scissors"), playerScore++)
          : ((text = "You Lose! Paper beats Rock"), computerScore++);
        return text;

      case "scissors":
        computerSelection = "paper"
          ? ((text = "You Won! Scissors beats Paper"), playerScore++)
          : ((text = "You Lose! Rock beats Scissors"), computerScore++);
        return text;

      case "paper":
        computerSelection = "rock"
          ? ((text = "You Won! Paper beats Rock"), playerScore++)
          : ((text = "You Lose! Scissors beats Paper"), computerScore++);
        return text;
    }
  }
}

function playGame() {
  while (true) {
    if (playerScore == 5 || computerScore == 5) {
      return `Game Over! You ${playerScore > computerScore ? "Won" : "Lose!"}`;
    } else {
      let playerSelection = prompt('please enter your choice", rock');
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }
  }
}

// initial condition
let playerScore = 0;
let computerScore = 0;
console.log(playGame());
