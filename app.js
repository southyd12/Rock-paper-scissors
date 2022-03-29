const computer = ["rock", "paper", "scissors"];
function computerPlay() {
    return computer[Math.floor(Math.random() * computer.length)];
}
let computerScore = 0;
let playerScore = 0;
function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return 'It is a tie';
    } else if (computerSelection == "rock" && playerSelection == "scissors"){
        ++computerScore
        return("You lose. Rock beats scissors");
    } else if (computerSelection == "scissors" && playerSelection == "paper"){
        ++computerScore
        return("You lose. Scissors beats paper");
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        ++computerScore
        return("You lose. Paper beats rock");
    } else if (computerSelection == "rock" && playerSelection == "paper"){
        ++playerScore
        return("You win. Paper beats rock");
    } else if (computerSelection == "scissors" && playerSelection == "rock"){
        ++playerScore
        return("You win. Rock beats scissors");
    } else if (computerSelection == "paper" && playerSelection == "scissors"){
        ++playerScore
        return("You win. Scissors beats paper");
    }
 }
function game(){
    for(var i=0;i<20;i++){
        const playerSelection = prompt('What do you want to play?');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
        if (playerScore === 5){
            return("You have won the match");
        } else if (computerScore === 5){
            return("You have lost the match");
        }
    }
}
console.log(game());


