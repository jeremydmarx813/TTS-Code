var player1ScoreNumber = document.getElementById('playerA-score').children[1];
var player2ScoreNumber = document.getElementById('playerB-score').children[1];
var playerThrows = document.getElementById('round-results').children[0];
var winnerText = document.getElementById('round-results').children[1];
var playButton = document.getElementById('play-button');
var winner;

var hands = [ 'rock', 'paper', 'scissors' ];

var player1 = {
	name        : 'Player 1',
	wins        : 0,
	currentToss : null
};
var player2 = {
	name        : 'Player 2',
	wins        : 0,
	currentToss : null
};

var player3 = {
	name        : 'Player 3',
	wins        : 0,
	currentToss : null
};
var player4 = {
	name        : 'Player 4',
	wins        : 0,
	currentToss : null
};

var scoreBoard = {
	// playerOneWins   : player1.wins,
	// playerTwoWins   : player2.wins,
	// playerThreeWins : player3.wins,
	// playerFourWins  : player4.wins
};

var currentPlayerA = document.getElementById('playerAMenu').value;
var currentPlayerB = document.getElementById('playerBMenu').value;

console.group('%cstart new round!', 'font-size: 14px; color: red;');
currentPlayerChecker();

function currentPlayerChecker() {
	console.log('Player A is: ', currentPlayerA);
	console.log('Player B is: ', currentPlayerB);
}

function assignToss(playerA, playerB) {
	console.count('Round Number');
	console.log(typeof playerA);
	function generateToss() {
		return parseInt(Math.random() * 10) % 3;
	}
	// var objNum = [ 'rock', 'paper', 'scissors' ];
	playerA.currentToss = hands[generateToss()];
	console.log(playerA);
	playerB.currentToss = hands[generateToss()];
	console.log(playerB);
	console.log('Player1 throws a ' + playerA.currentToss + ', Player2 throws a ' + playerB.currentToss);
	playerThrows.innerHTML = 'Player1 throws a ' + playerA.currentToss + ', Player2 throws a ' + playerB.currentToss;
	return;
}

function throwDown(playerA, playerB) {
	// var winner;
	if (playerA.currentToss === playerB.currentToss) {
		winnerText.innerHTML = 'Tie, throw down again!';
		console.log('Tie, throw down again!');
	} else if (playerA.currentToss === 'rock') {
		if (playerB.currentToss === 'paper') {
			winner = 'Player 2';
			winnerText.innerHTML = 'Player 2 wins';
			console.log('Player 2 wins!');
			playerB.wins++;
		} else {
			winner = 'Player 1';
			winnerText.innerHTML = 'Player 1 wins';
			console.log('Player 1 wins!');
			playerA.wins++;
		}
	} else if (playerA.currentToss === 'paper') {
		if (playerB.currentToss === 'scissors') {
			winner = 'Player 2';
			winnerText.innerHTML = 'Player 2 wins';
			console.log('Player 2 wins!');
			playerB.wins++;
		} else {
			winner = 'Player 1';
			winnerText.innerHTML = 'Player 1 wins';
			console.log('Player 1 wins!');
			playerA.wins++;
		}
	} else if (playerA.currentToss === 'scissors') {
		if (playerB.currentToss === 'rock') {
			winner = 'Player 2';
			winnerText.innerHTML = 'Player 2 wins';
			console.log('Player 2 wins!');
			playerB.wins++;
		} else {
			winner = 'Player 1';
			winnerText.innerHTML = 'Player 1 wins';
			console.log('Player 1 wins!');
			playerA.wins++;
		}
	}
	// console.log(winner);
	// return winner;
}
//??Why is the function necessary to keep the scoreBoard up to date?
function updateScoreBoard(board) {
	board.playerOneWins = player1.wins;
	board.playerTwoWins = player2.wins;
	board.playerThreeWins = player3.wins;
	board.playerFourWins = player4.wins;
	return board;
}

function scoreKeeper() {
	player1ScoreNumber.innerHTML = player1.wins;
	player2ScoreNumber.innerHTML = player2.wins;
	console.log('SCORE: Player1: ' + player1.wins + '. Player2: ' + player2.wins + '.');
	console.log('scoreboard', scoreBoard);
}

function winnerChecker(a, b) {
	if (a === 5 || b === 5) {
		playButton.innerText = 'Game over!';
		playButton.onclick = resetGame;
		if (a === 5) {
			console.log('Player 1 Wins the Whole Match!!');
			console.log('player 1', player1);
			console.log('score board', scoreBoard);
			winnerText.innerText = 'Player 1 Wins the Whole Match!!';
			winner = Array.from(document.getElementById('playerA-score').children)[1];
			winner.style.cssText = 'color: green';
			// player1ScoreNumber.style.cssText = 'color: green';
		} else {
			console.log('Player 2 Wins the Whole Match!!');
			console.log('player 2 log', player2);
			console.log('score board', scoreBoard);
			winnerText.innerText = 'Player 2 Wins the Whole Match!!';
			winner = Array.from(document.getElementById('playerB-score').children)[1];
			winner.style.cssText = 'color: green';
			// player2ScoreNumber.style.cssText = 'color: green';
		}
	}
}

function gamePlayer() {
	assignToss(currentPlayerA, currentPlayerB);
	throwDown(currentPlayerA, currentPlayerB);
	updateScoreBoard(scoreBoard);
	scoreKeeper();
	winnerChecker(currentPlayerA.wins, currentPlayerB.wins);
}

function resetGame() {
	player1.currentToss = null;
	player2.currentToss = null;
	player3.currentToss = null;
	player4.currentToss = null;
	player1.wins = 0;
	player2.wins = 0;
	player3.wins = 0;
	player4.wins = 0;
	console.groupEnd();
	console.group('%cstart new round!', 'font-size: 14px; color: red;');
	playButton.innerText = 'Play Round!';
	playerThrows.innerText = 'Hit the button to Play the Game!!';
	winnerText.innerText = '';
	player1ScoreNumber.innerHTML = player1.wins;
	player2ScoreNumber.innerHTML = player2.wins;
	// winner.forEach((element) => {
	// 	element.style.cssText = 'color: black';
	// });
	winner.style.cssText = 'color: black';
	playButton.onclick = gamePlayer;
	// console.log(document.getElementById('score-row').children);
	// .style = 'color: black';
}

playButton.onclick = gamePlayer;
