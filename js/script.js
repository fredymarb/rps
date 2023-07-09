let playerScore = 0;
let computerScore = 0;

game();



function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);
    switch (computerChoice) {
        case 1:
            return 'rock';
    
        case 2:
            return 'paper';
            
            default:
            return 'scissors';
            
        }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return `You Win, ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return `You Win, ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return `You Win, ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore += 1;
        return `You Lose, ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for(let i = 0; i < Infinity; i++) {
        let playerSelection = prompt("Rock, paper, scissors:", 'rock').toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerScore, computerScore);

        if (playerScore == 5) {
            console.log("player got to 5pts first");
            break;
        } else if (computerScore == 5) {
            console.log("computer got to 5pts first");
            break;
        }
    }

}