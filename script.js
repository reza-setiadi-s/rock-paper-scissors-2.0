const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".pick");
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const playAgain = document.querySelector(".restart");
let playerSelect;
let playerWin = 0;
let computerWin = 0;

// Declaration variable

computerPlay = () => {
	const computerPick = ["paper", "rock", "scissors"];
	let random = Math.floor(Math.random() * 3);
	return computerPick[random];	
}

// Computer Picks

buttons.forEach((button) => { 

	button.addEventListener("click", () => {
		playRound(button.id);
		
		});
});

// Player Picks


playRound = (playerPick, computerPick) => {

	computerPick = computerPlay();

	if(playerPick == "rock") {
		if(computerPick == "paper") {
			result.textContent = "Sorry, you lose. :(";
			computerWin++;
		} else if(computerPick == "scissors") {
			result.textContent = "Yey, you win!";
			playerWin++;
		} else {
			result.textContent = "It's tie.";
		}
	} else if(playerPick == "paper") {
		if(computerPick == "scissors") {
			result.textContent = "Sorry, you lose. :(";
			computerWin++;
		} else if(computerPick == "rock") {
			result.textContent = "Yey, you win!";
			playerWin++;
		} else {
			result.textContent = "It's tie.";
		}
	} else if(playerPick == "scissors") {
		if(computerPick == "rock") {
			result.textContent = "Sorry, you lose. :(";
			computerWin++;
		} else if(computerPick == "paper") {
			result.textContent = "Yey, you win!";
			playerWin++;
		} else {
			result.textContent = "It's tie.";
		}
	
	}
	
	playerScore.textContent = "Player: " + playerWin;
	computerScore.textContent = "Computer: " + computerWin;	

	if(playerWin == 5) {

		result.textContent = "Congratulation, you're the winner!!"
		disableButton();	
	} else if(computerWin == 5) {

		result.textContent = "Hahaha, you lose, nooob.";
		disableButton();
	}
}


// The rules

function disableButton() {
	buttons.forEach(element => {
		element.disabled = true;
		
	});
}

resetGame = () => {

	playAgain.addEventListener("click", () => {

		location.reload();
	});

} 

resetGame();

// Button function
