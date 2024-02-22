function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    
};

let playerSelection;
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

allowedPlays = ["rock", "paper", "scissors"];


function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper"){
        ++computerScore;
        return "lose";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        ++playerScore;
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        return "draw";
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "draw";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        ++computerScore;
        return "lose";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        ++playerScore;
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        ++playerScore;
        return "win";
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "draw";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        ++computerScore;
        return "lose";
    } else {
        return "error";
    }
}

function playerReply(result){
    if (result === "win") {
        return `You win! Computer chose ${computerSelection}`
    } else if (result === "draw") {
        return `It's a draw! Computer also chose ${computerSelection}`;
    } else if (result === "lose") {
        return `You lose! Computer chose ${computerSelection}`
    }
}


function playGame() {
    computerSelection = getComputerChoice();
    let playerSelection = prompt('rock, paper or scissors?');
    playerSelection = playerSelection.toLowerCase();
    if (allowedPlays.includes(playerSelection)) {
        alert(playerReply(playRound(playerSelection, computerSelection)));
    } else {
        alert("That isn't allowed, please try again.");
        playGame();
    };
}


for (let i = 0; i < 5; i++) {
    playGame();
}

alert(`Your score is ${playerScore}, the computer score is ${computerScore}`);
