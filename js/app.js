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


const game = () => {
  
  const endGame = () => {
    if (playerScore > computerScore ) {
      console.log("You beat the machines");
    } else {
      console.log("You suck Loser");
    }
  }
  
  let computerScore = 0
  let playerScore = 0 
  let round = 5
  
  const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase();
    console.log(`The Computer Choose: ${computerSelection}`);
    round--
    if (player == computerSelection) {
      return "It's a tie";
    } else if (player == 'rock') {
      if (computerSelection == "paper") {
        computerScore++
        return "You Lose this round! Paper beats Rock"
      } else {
        playerScore++
        return "You Win this round! Rock beats Scissors"
      }
    } else if (player == 'paper') {
      if (computerSelection == "scissors") {
        computerScore++
        return "You Lose this round! Scissors beats Paper"
      } else {
        playerScore++
        return "You Win this round! Paper Beats Rock"
      }
    } else if (player == 'scissors') {
      if (computerSelection == "rock") {
        computerScore++
        return "You Lose this round! rock beats scissors"
      } else {
        playerScore++
        return "You Win this round! Scissors beats Paper"
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please enter Rock, Paper or Scissors")
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Your Score: ${playerScore}`);
    console.log(`Computers Score: ${computerScore}`);
    console.log(`Rounds Left: ${round}`);
  } endGame() 


}

game()
