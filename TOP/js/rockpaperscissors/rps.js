// computer's choice of rock, paper or scissors
function getComputerChoice(){
    let randomNumber= Math.floor(Math.random()*10) + 1;
    console.log(randomNumber);
    let computerChoice = "";
    if (randomNumber <= 3) {
        computerChoice = "Rock";
    }
    else if (randomNumber <= 6) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice(){
    let answer = (prompt("Rock, Paper, or Scissors? "));
    console.log(answer);
    return answer;
}

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    if (human === computer) {
        console.log("Tie!");
    }
    else if (human == "rock" && computer == "paper") {
        console.log("you lose! Paper beats Rock.");
        computerScore+=1;
    }
    else if (human == "paper" && computer == "scissors") {
        console.log("you lose! Scissors beats Paper.");
        computerScore+=1;   
    }
    else if (human == "scissors" && computer == "rock") {
        console.log("you lose! Rock beats Scissors.");
        computerScore+=1;
    }
    else {
        console.log("You win this round!");
        humanScore+=1;
    }
}
let humanScore = 0;
let computerScore = 0;

function playGame(){
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("human score: ", humanScore);
        console.log("computer score: ", computerScore);        
    }
    if (humanScore > computerScore) {
        console.log("you win the game!");
    }
    else if (computerScore > humanScore) {
        console.log("you lose the game :(");
    }
    else {
        console.log("Tie! you both win the game!");
    }
}
playGame();