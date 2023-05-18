const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
let randomNumber;
let computerChoice;
let currentUserChoice;
let result;


possibleChoices = document.querySelectorAll("button")


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    currentUserChoice = e.target.id;
    userChoiceDisplay.innerHTML = currentUserChoice;
    computerGeneratedChoice();
    results();
}))



const computerGeneratedChoice = () => {
    randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    switch(randomNumber){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        default:
            computerChoice = "";
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}


const results = () => {
    if(computerChoice === currentUserChoice) {
        result = "It's a draw!";
    }
    
    if(computerChoice === "rock" && currentUserChoice === "paper"){
        result = "you win";
    }

    if(computerChoice === "rock" && currentUserChoice === "scissors"){
        result = "you lose";
    }

    if(computerChoice === "scissors" && currentUserChoice === "paper"){
        result = "you lose";
    }

    if(computerChoice === "paper" && currentUserChoice === "scissors"){
        result = "you win";
    }

    if(computerChoice === "paper" && currentUserChoice === "rock") {
        result = "you lose";
    }

    if(computerChoice === "scissors" && currentUserChoice === "rock"){
        result = "you win";
    }

    resultDisplay.innerHTML = result;
}