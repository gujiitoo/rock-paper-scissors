function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)    
    if (choice === 0){
        return "rock"
    }else if (choice === 1) {
        return "paper"
    }else {
        return "scissors"
    }
}

function getPlayerChoice() {
    let selection = prompt("Choose Weapon").toLowerCase()
    return selection
}
function playRound(player, computer) {
    if (player === "rock" && computer === "scissors") {
        console.log("Win")
        return "You Win! Rock beats Scissors"
    }else if (player === "scissors" && computer === "rock") {
        console.log("Lost")
        return "You Lose! Rock beats Scissors"
    }else if (player === "paper" && computer === "rock") {
        console.log("Win")
        return "You Win! Paper beats Rock"
    }else if (player === "rock" && computer === "paper") {
        console.log("Lost")
        return "You Lose! Paper beats Rock"
    }else if (player === "scissors" && computer === "paper") {
        console.log("Win")
        return "You Win! Scissors beats Paper"
    }else if (player === "paper" && computer === "scissors") {
        console.log("Lost")
        return "You Lose! Scissors beats Paper"
    }else {
        console.log("drawed")
        return "Draw"
    }
}


function play() {
    alert("Best of 5!")
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        let winner = playRound(getPlayerChoice(), getComputerChoice())
        if (winner === "You Win! Rock beats Scissors") {
            playerScore++
        }else if (winner === "You Win! Paper beats Rock") {
            playerScore++
        }else if (winner === "You Win! Scissors beats Paper") {
            playerScore++
        }else if (winner === "You Lose! Rock beats Scissors") {
            computerScore++
        }else if (winner === "You Lose! Paper beats Rock") {
            computerScore++
        }else if (winner === "You Lose! Scissors beats Paper") {
            computerScore++
        }
    }
    if (playerScore > computerScore) {
        console.log(`You Win! ${playerScore} - ${computerScore} `)
    }else if (playerScore < computerScore) {
        console.log(`You Lose! ${playerScore} - ${computerScore} `)
    }else {
        console.log("It's a Draw!")
    }
}

play()