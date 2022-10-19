const selections = document.querySelectorAll('.btn')
const result = document.querySelector('#result')
const player = document.querySelector('#player-score')
const computer = document.querySelector('#computer-score')
const retry = document.querySelector('#retry')
const playerChoice = document.querySelector('.player-choice')
const computerChoice = document.querySelector('.computer-choice')

let playerSelection;
let playerScore = 0;
let computerScore = 0;

selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5){
            playerSelection = selection.value;
            switch (playerSelection){
                case 'rock':
                    playerChoice.innerHTML = '<i class="icon fa-regular fa-hand-back-fist"></i>'
                    break;
                case 'paper':
                    playerChoice.innerHTML = '<i class="icon fa-regular fa-hand"></i>'
                    break;
                case 'scissors':
                    playerChoice.innerHTML = '<i class="icon fa-regular fa-hand-scissors"></i>'
                    break;
            }
                

            
            findWinner(playerSelection)
            if (playerScore === 5 || computerScore === 5) {
                announceWinner()  
            }
        } 
    })
})


function findWinner(playerSelection) {
    computerChoiceResult = getComputerChoice()
    const winner = playRound(playerSelection, computerChoiceResult)
    if (winner === 1) {
        playerScore++;
        player.textContent = playerScore
    }
    else if (winner === 2){ 
        computerScore++;
        computer.textContent = computerScore 
    }
}

function announceWinner() {
    const winnerAnnounce = document.createElement('h1')
    winnerAnnounce.classList.add("winnerAnnounce")
    let gameWinner = findGameWinner(playerScore, computerScore)
    if (gameWinner === 'You win!') {
        winnerAnnounce.classList.add("win")
    }else {
        winnerAnnounce.classList.add("lose")
    }
    winnerAnnounce.textContent = `${gameWinner}`
    retry.appendChild(winnerAnnounce)
    const retryBtn = document.createElement('button')
    retryBtn.classList.add("retry-button")
    retryBtn.textContent = 'Retry'
    retry.appendChild(retryBtn)
    retryBtn.addEventListener('click', () => {
        result.textContent = 'First to 5 Wins!'
        playerChoice.textContent = '?'
        computerChoice.textContent = '?'
        playerScore = 0;
        player.textContent = '0'
        computerScore = 0;
        computer.textContent = '0'
        winnerAnnounce.remove()
        retryBtn.remove()
    })

}




function findGameWinner(playerScore, computerScore) {
    if (playerScore > computerScore) return "You win!";
    else return "You lose...";
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)    
    if (choice === 0) {
        computerChoice.innerHTML = '<i class="icon fa-regular fa-hand-back-fist"></i>'
        return 'rock'
    }
    else if (choice === 1) {
        computerChoice.innerHTML = '<i class="icon fa-regular fa-hand"></i>'
        return 'paper'
    }        
    else {
        computerChoice.innerHTML = '<i class="icon fa-regular fa-hand-scissors"></i>'
        return 'scissors'
    }
}

function playRound(player, computer) {
    if (player === "rock" && computer === "scissors") {
        console.log("Win")
        result.textContent = "You Win! Rock beats Scissors"
        return 1
    }else if (player === "scissors" && computer === "rock") {
        console.log("Lost")
        result.textContent = "You Lose! Rock beats Scissors"
        return 2
    }else if (player === "paper" && computer === "rock") {
        console.log("Win")
        result.textContent = "You Win! Paper beats Rock"
        return 1
    }else if (player === "rock" && computer === "paper") {
        console.log("Lost")
        result.textContent = "You Lose! Paper beats Rock"
        return 2
    }else if (player === "scissors" && computer === "paper") {
        console.log("Win")
        result.textContent = "You Win! Scissors beats Paper"
        return 1
    }else if (player === "paper" && computer === "scissors") {
        console.log("Lost")
        result.textContent = "You Lose! Scissors beats Paper"
        return 2
    }else {
        console.log("drawed")
        result.textContent = "Draw!"
        return 0
    }
}