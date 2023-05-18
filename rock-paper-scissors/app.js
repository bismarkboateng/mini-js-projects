const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("results")
let randomNumber;
let computerChoice;


possibleChoices = document.querySelectorAll("button")


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    currentUserChoice = e.target.id;
    userChoiceDisplay.innerHTML = currentUserChoice;
    computerGeneratedChoice();
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