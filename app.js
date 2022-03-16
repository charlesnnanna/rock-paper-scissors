const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')
const possibleChoices = document.querySelectorAll("#buttons button")
const reset =  document.getElementById('reset')
const winningScore = document.getElementById("winning-score")
let userChoice 
let computerChoice
let result
let userScore = 0
let computerScore = 0
let targetScore

window.addEventListener("DOMContentLoaded", addEventsToButtons())

//Adds all the necessary events
function addEventsToButtons (){
    //this gives all the elements in the possibleChoice node lidst a click event
    possibleChoices.forEach(function(possibleChoice){
        possibleChoice.addEventListener("click", function(e){
            userChoice = e.target.id
            computerChoice = possibleChoices[Math.floor((Math.random() * possibleChoices.length))].id;
            userChoiceDisplay.innerHTML = userChoice
            computerChoiceDisplay.innerHTML = computerChoice
            getResult()
            checkForWinner()
        })
    })

    //adds event for reset button
    reset.addEventListener('click', function(e){
        resetAll()
    })

    //add change event to input... set winning score
    winningScore.addEventListener('change', function(e){
        targetScore = e.target.value
        console.log(targetScore)
    })
}



//this gets and prints the result on the screen
function getResult(){
    if ((userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")){
            result = "User Wins"
            userScore++
            resultDisplay.innerHTML = result
            userScoreDisplay.innerHTML = userScore
        }
     
    if ((userChoice === "rock" && computerChoice === "paper") || 
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "scissors")){
        result = "Computer Wins"
        computerScore++
        resultDisplay.innerHTML = result
        computerScoreDisplay.innerHTML = computerScore
    }

    if ((userChoice === "rock" && computerChoice === "rock") || 
    (userChoice === "scissors" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "paper")){
        result = "It's a Draw"
        resultDisplay.innerHTML = result
    }
}

function resetAll (){
        userChoice = ""
        computerChoice = ""
        result = ""
        userScore = 0
        computerScore = 0
        userChoiceDisplay.innerHTML = userChoice
        computerChoiceDisplay.innerHTML = computerChoice
        resultDisplay.innerHTML = result
        userScoreDisplay.innerHTML = userScore
        computerScoreDisplay.innerHTML = computerScore
}
function checkForWinner(){
    if (userScore === parseInt(targetScore)){
        prompt ("User Wins the game")
        console.log("it has reached")
        resetAll()
    }

    if (computerScore === parseInt(targetScore)){
        prompt ("Computer wins the game")
        console.log("it has reached")
        resetAll()
    }

    if (!targetScore){
       targetScore = prompt ("Set the winning score")
       console.log(targetScore)
    }
}

