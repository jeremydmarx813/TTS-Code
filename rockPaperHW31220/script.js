var player1ScoreNumber = document.getElementById('playerA-score').children[1];
var player2ScoreNumber = document.getElementById('playerB-score').children[1];
var playerThrows = document.getElementById('round-results').children[0];
var winnerText = document.getElementById('round-results').children[1];
var playButton = document.getElementById('play-button');
var pageScoreBoardContainer = document.getElementById('scoreboardcontainer');
var pageIndividualScores = [document.getElementById('player1BoardScore'), document.getElementById('player2BoardScore'), document.getElementById('player3BoardScore'), document.getElementById('player4BoardScore')];
var winner;
var allUnderFive = true;

var hands = [ 'rock', 'paper', 'scissors' ];

var player1 = {
	name       : 'Player 1',
	wins       : 0,
	assignToss
	// currentToss : null
};
var player2 = {
	name       : 'Player 2',
	wins       : 0,
	assignToss
	// currentToss : null
};

var player3 = {
	name       : 'Player 3',
	wins       : 0,
	assignToss
	// currentToss : null
};
var player4 = {
	name       : 'Player 4',
	wins       : 0,
	assignToss
	// currentToss : null
};

var scoreBoard = {
	// playerOneWins   : player1.wins,
	// playerTwoWins   : player2.wins,
	// playerThreeWins : player3.wins,
	// playerFourWins  : player4.wins
};

var htmlPlayerA = document.getElementById('playerAMenu').value;
var htmlPlayerB = document.getElementById('playerBMenu').value;

console.group('%cstart new round!', 'font-size: 14px; color: red;');
// currentPlayerChecker();
console.count('Round Number');

function currentPlayerChecker() {
	console.log('Player A is: ', htmlPlayerA);
	console.log('Player B is: ', htmlPlayerB);
}

function assignToss() {
	// console.log(typeof playerA);
	function generateToss() {
		return parseInt(Math.random() * 10) % 3;
	}
	// var objNum = [ 'rock', 'paper', 'scissors' ];
	// playerA.currentToss = hands[generateToss()];
	// console.log(playerA);
	// playerB.currentToss = hands[generateToss()];
	// console.log(playerB);
	// console.log('Player1 throws a ' + playerA.currentToss + ', Player2 throws a ' + playerB.currentToss);
	// playerThrows.innerHTML = 'Player1 throws a ' + playerA.currentToss + ', Player2 throws a ' + playerB.currentToss;
	playerThrows.innerHTML = 'placeholder from assign toss func';
	return hands[generateToss()];
}

function throwDown(playerA, playerB) {
	var playerAHand = playerA.assignToss();
	// console.log(playerA.name  +' hand func var: ', playerAHand);
	var playerBHand = playerB.assignToss();
	// console.log(playerB.name + ' hand func var: ', playerBHand);
	playerThrows.innerHTML =
		playerA.name + 'throws a ' + playerAHand + ', ' + playerB.name + ' throws a ' + playerBHand;
	console.log(playerA.name + ' throws a ' + playerAHand + ', ' + playerB.name + ' throws a ' + playerBHand);
	if (playerAHand === playerBHand) {
		winnerText.innerHTML = 'Tie, throw down again!';
		console.log('Tie, throw down again!');
	} else if (playerAHand === 'rock') {
		if (playerBHand === 'paper') {
			// winner = 'Player 2';
			winnerText.innerHTML = playerB.name + 'wins';
			console.log(playerB.name + ' wins!');
			playerB.wins++;
		} else {
			// winner = 'Player 1';
			winnerText.innerHTML = playerA.name + ' wins';
			console.log(playerA.name + ' wins!');
			playerA.wins++;
		}
	} else if (playerAHand === 'paper') {
		if (playerBHand === 'scissors') {
			// winner = 'Player 2';
			winnerText.innerHTML = playerB.name + ' wins';
			console.log(playerB.name + ' wins!');
			playerB.wins++;
		} else {
			// winner = 'Player 1';
			winnerText.innerHTML = playerA.name + ' wins';
			console.log(playerA.name + ' wins!');
			playerA.wins++;
		}
	} else if (playerAHand === 'scissors') {
		if (playerBHand === 'rock') {
			// winner = 'Player 2';
			winnerText.innerHTML = playerB.name + ' wins';
			console.log(playerB.name + ' wins!');
			playerB.wins++;
		} else {
			// winner = 'Player 1';
			winnerText.innerHTML = playerA.name + ' wins';
			console.log(playerA.name + ' wins!');
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
	if (a.wins === 5 || b.wins === 5) {
		playButton.innerText = 'Game over!';
		playButton.onclick = resetGame;
		allUnderFive = false;
		if (a.wins === 5) {
			console.log(a.name + 'Wins the Whole Match!!');
			// console.log('player 1', player1);
			console.log('score board', scoreBoard);
			winnerText.innerText = a.name + ' Wins the Whole Match!!';
			winner = Array.from(document.getElementById('playerA-score').children)[1];
			winner.style.cssText = 'color: green';
			// player1ScoreNumber.style.cssText = 'color: green';
		} else {
			console.log(b.name + ' Wins the Whole Match!!');
			// console.log('player 2 log', player2);
			console.log('score board', scoreBoard);
			winnerText.innerText = b.name + ' Wins the Whole Match!!';
			winner = Array.from(document.getElementById('playerB-score').children)[1];
			winner.style.cssText = 'color: green';
			// player2ScoreNumber.style.cssText = 'color: green';
		}
	}
}

function gamePlayer(a, b) {
	// assignToss(player1, player2);
	if (allUnderFive) {
		throwDown(a, b);
		updateScoreBoard(scoreBoard);
		scoreKeeper();
		winnerChecker(a, b);
	} else {
		console.log('call resetgame func to play another tournament');
	}
}

function resetGame() {
	// player1.currentToss = null;
	// player2.currentToss = null;
	// player3.currentToss = null;
	// player4.currentToss = null;
	player1.wins = 0;
	player2.wins = 0;
	player3.wins = 0;
	player4.wins = 0;
	allUnderFive = true;
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
