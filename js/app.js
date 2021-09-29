
const buttons = document.querySelectorAll('#button');
const playerDisplay = document.getElementById('player-score');
const tieDisplay = document.getElementById('tie-score');
const machinesDisplay = document.getElementById('machines-score');
const leftPlayerDisplay = document.getElementById('left-player');
const rightPlayerDisplay = document.getElementById('right-player');
const controls = document.getElementById('controls');
const youWin = document.getElementById('you-win');
const youLose = document.getElementById('you-lose');

const youWinDisplay = () => { 
  controls.style.display = "none";
  youWin.style.display = "block";
  document.getElementById('play-again-win').addEventListener('click',() => location.reload());

}

const youLoseDisplay = () => { 
  controls.style.display = "none";
  youLose.style.display = "block";
  document.getElementById('play-again-lose').addEventListener('click',() => location.reload());

}

const getPlayerSelection = (e) => {
  let playerSelection = (e.target.classList.value);
  e.stopPropagation();
  playRound(playerSelection, computerPlay());
}

buttons.forEach(button => button.addEventListener('click', getPlayerSelection));


const computerPlay = () => {
  let randNum = Math.floor(Math.random()*3)
  if (randNum == 0) {
    return "rock"
  } else if (randNum == 1) {
    return "paper"
  } else {
    return "scissors"
  }  
}

  

let computerScore = 0
let playerScore = 0
let tie = 0

const playRound = (playerSelection, computerSelection) => {
updateDisplay(playerSelection, computerSelection)  
if (playerSelection == computerSelection) {
  tie++
  leftPlayerDisplay.style.backgroundColor = 'green';
    rightPlayerDisplay.style.backgroundColor = 'green';
  } else if (playerSelection == 'rock') {
    if (computerSelection == "paper") {
      computerScore++
      leftPlayerDisplay.style.backgroundColor = 'red';
      rightPlayerDisplay.style.backgroundColor = 'green';
    } else {
      playerScore++
      leftPlayerDisplay.style.backgroundColor = 'green';
      rightPlayerDisplay.style.backgroundColor = 'red';
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == "scissors") {
      computerScore++
      leftPlayerDisplay.style.backgroundColor = 'red';
      rightPlayerDisplay.style.backgroundColor = 'green';
    } else {
      playerScore++
      leftPlayerDisplay.style.backgroundColor = 'green';
      rightPlayerDisplay.style.backgroundColor = 'red';
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == "rock") {
      computerScore++
      leftPlayerDisplay.style.backgroundColor = 'red';
      rightPlayerDisplay.style.backgroundColor = 'green';
    } else {
      playerScore++
      leftPlayerDisplay.style.backgroundColor = 'green';
      rightPlayerDisplay.style.backgroundColor = 'red';
    }
  }
  updateWinner();
}
  
  
const updateWinner = () => {
  playerDisplay.innerHTML = playerScore;
  tieDisplay.innerHTML = tie;
  machinesDisplay.innerHTML = computerScore;
  checkEndGame();
}

const checkEndGame = () => {
  if (playerScore == 5) {
    youWinDisplay();

  } else if (computerScore == 5) {
    youLoseDisplay();

  }
}

const updateDisplay = (playerSelection, computerSelection) => {
  if (playerSelection == 'rock') {
    leftPlayerDisplay.src = "images/rock.png";
  } else if (playerSelection == 'paper') {
    leftPlayerDisplay.src = "images/paper.png";
  } else if (playerSelection == 'scissors') {
    leftPlayerDisplay.src = "images/scissors.png";
  } 

  if (computerSelection == 'rock') {
    rightPlayerDisplay.src = "images/rock.png";
  } else if (computerSelection == 'paper') {
    rightPlayerDisplay.src = "images/paper.png";
  } else if (computerSelection == 'scissors') {
    rightPlayerDisplay.src = "images/scissors.png";
  }
}
