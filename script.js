// initial condition
let pointsRequired = document.querySelector('.pointsleft');
const playerScoreview = document.querySelector('.playercount');
const computerScoreview = document.querySelector('.compcount');
const reloadBtn = document.querySelector('.reload');
const result = document.querySelector('.result');
const resultDisplay = document.querySelector('.move');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

      
const btnSelection = document.querySelectorAll('.btn');
btnSelection.forEach( btnSelection => {
btnSelection.addEventListener('click', () => {
  playerSelection = btnSelection.textContent;
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  });
});
      
function getComputerChoice() {
  let random = Math.trunc(Math.random() * 3);
  //console.log(random);
  switch (random) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const result =document.querySelector('.result');

  if (playerSelection === computerSelection) {
        result.textContent = `You Tied!` ;
      } else {
        switch (playerSelection) {
          case "Rock":
          computerSelection === "Scissors"
           ? ((text = "You Won! Rock beats Scissors"), playerScore++)
           : ((text = "You Lose! Paper beats Rock"), computerScore++);
           result.textContent = text;
           break;
              
          case "Scissors":
          computerSelection = "Paper" 
           ? ((text = "You Won! Scissors beats Paper"), playerScore++)
           : ((text = "You Lose! Rock beats Scissors"), computerScore++);
           result.textContent = text;
           break;
          case "Paper":
          computerSelection = "Rock"
           ? ((text = "You Won! Paper beats Rock"), playerScore++)
           : ((text = "You Lose! Scissors beats Paper"), computerScore++);
           result.textContent = text;
           break;
         }
    }

  computerScoreview.textContent = computerScore;
  playerScoreview.textContent = playerScore; 
  pointsRequired.textContent = `Points needed to win : ${5-playerScore}`;

  if(playerScore == 5 || computerScore == 5){
      gameEnd();
  }
}
            
function gameEnd () {

  btnSelection.forEach( btnSelection => {
    btnSelection.style.display ='none';
  });
  
  resultDisplay.textContent = 'Game Over!'
  pointsRequired.style.display = 'none';
  if(playerScore > computerScore){
    result.style.fontSize = '2rem';
    result.innerText = 'You Won The Game'
    result.style.color = '#1bf5af';
  }
  else{
    result.style.fontSize = '2rem';
    result.innerText = 'You Lost The Game';
    result.style.color = '#eb2632';
  }

  reloadBtn.innerText = 'Restart';
  reloadBtn.style.display = 'flex'
  reloadBtn.addEventListener('click',() => {
      window.location.reload();
  })
}