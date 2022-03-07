const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll("button")
let userChoice 
let computerChoice

possibleChoices.forEach(function(possibleChoice){
    possibleChoice.addEventListener("click", function(e){
        userChoice = e.target.id
        computerChoice = possibleChoices[Math.floor((Math.random() * possibleChoices.length))].id;
        userChoiceDisplay.innerHTML = userChoice
        computerChoiceDisplay.innerHTML = computerChoice
    })
})
