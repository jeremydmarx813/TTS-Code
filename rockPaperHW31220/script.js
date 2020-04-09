var player1ScoreNumber = document.getElementById('playerA-score').children[1];
var player2ScoreNumber = document.getElementById('playerB-score').children[1];
var playerThrows = document.getElementById('round-results').children[0];
var winnerText = document.getElementById('round-results').children[1];
var playButton = document.getElementById('play-button');
var pageScoreBoardContainer = document.getElementById('scoreboardcontainer');
var pageIndividualScores = [
	document.getElementById('player1BoardScore'),
	document.getElementById('player2BoardScore'),
	document.getElementById('player3BoardScore'),
	document.getElementById('player4BoardScore')
];
var winner;
var allUnderFive = true;

var hands = [ 'rock', 'paper', 'scissors' ];

var allPlayers = {
	player1 : {
		name       : 'Player 1',
		wins       : 0,
		assignToss
	},
	player2 : {
		name       : 'Player 2',
		wins       : 0,
		assignToss
	},

	player3 : {
		name       : 'Player 3',
		wins       : 0,
		assignToss
	},
	player4 : {
		name       : 'Player 4',
		wins       : 0,
		assignToss
	}
};

var scoreBoard = {};

console.group('%cstart new round!', 'font-size: 14px; color: red;');
console.count('Round Number');

function assignToss() {
	function generateToss() {
		return parseInt(Math.random() * 10) % 3;
	}
	return hands[generateToss()];
}

function throwDown(playerA, playerB) {
	// debugger;
	var playerAHand = playerA.assignToss();
	var playerBHand = playerB.assignToss();
	playerThrows.innerText =
		playerA.name + ' throws a ' + playerAHand + ', ' + playerB.name + ' throws a ' + playerBHand;
	console.log(playerA.name + ' throws a ' + playerAHand + ', ' + playerB.name + ' throws a ' + playerBHand);
	if (playerAHand === playerBHand) {
		winnerText.innerText = 'Tie, throw down again!';
		console.log('Tie, throw down again!');
	} else if (playerAHand === 'rock') {
		if (playerBHand === 'paper') {
			winnerText.innerText = playerB.name + ' wins';
			console.log(playerB.name + ' wins!');
			playerB.wins++;
		} else {
			winnerText.innerText = playerA.name + ' wins';
			console.log(playerA.name + ' wins!');
			playerA.wins++;
		}
	} else if (playerAHand === 'paper') {
		if (playerBHand === 'scissors') {
			winnerText.innerText = playerB.name + ' wins';
			console.log(playerB.name + ' wins!');
			playerB.wins++;
		} else {
			winnerText.innerText = playerA.name + ' wins';
			console.log(playerA.name + ' wins!');
			playerA.wins++;
		}
	} else if (playerAHand === 'scissors') {
		if (playerBHand === 'rock') {
			winnerText.innerText = playerB.name + ' wins';
			console.log(playerB.name + ' wins!');
			playerB.wins++;
		} else {
			winnerText.innerText = playerA.name + ' wins';
			console.log(playerA.name + ' wins!');
			playerA.wins++;
		}
	}
}
//??Why is the function necessary to keep the scoreBoard up to date?
function updateScoreBoard(board) {
	board.playerOneWins = allPlayers.player1.wins;
	pageIndividualScores[0].innerText = allPlayers.player1.wins;
	board.playerTwoWins = allPlayers.player2.wins;
	pageIndividualScores[1].innerText = allPlayers.player2.wins;
	board.playerThreeWins = allPlayers.player3.wins;
	pageIndividualScores[2].innerText = allPlayers.player3.wins;
	board.playerFourWins = allPlayers.player4.wins;
	pageIndividualScores[3].innerText = allPlayers.player4.wins;
	return board;
}

function scoreKeeper(a, b) {
	player1ScoreNumber.innerText = a.wins;
	player2ScoreNumber.innerText = b.wins;
	console.log('SCORE: ' + a.name + ': ' + a.wins + '.' + b.name + ': ' + b.wins + '.');
	console.log('scoreboard', scoreBoard);
}

function winnerChecker(a, b) {
	if (a.wins === 5 || b.wins === 5) {
		playButton.innerText = 'Game over!';
		playButton.onclick = resetGame;
		allUnderFive = false;
		if (a.wins === 5) {
			console.log(a.name + ' Wins the Whole Match!!');
			console.log('score board', scoreBoard);
			winnerText.innerText = a.name + ' Wins the Whole Match!!';
			winner = Array.from(document.getElementById('playerA-score').children)[1];
			winner.style.cssText = 'color: green';
		} else {
			console.log(b.name + ' Wins the Whole Match!!');
			console.log('score board', scoreBoard);
			winnerText.innerText = b.name + ' Wins the Whole Match!!';
			winner = Array.from(document.getElementById('playerB-score').children)[1];
			winner.style.cssText = 'color: green';
		}
	}
}

function gamePlayer() {
	var htmlPlayerA = document.getElementById('playerAMenu').value;
	var htmlPlayerB = document.getElementById('playerBMenu').value;
	var currentPlayerA;
	var currentPlayerB;

	function currentPlayerChecker(a, b) {
		// debugger;
		for (key in allPlayers) {
			if (a === key) {
				currentPlayerA = allPlayers[key];
			} else if (b === key) {
				currentPlayerB = allPlayers[key];
			}
		}
		console.log('Player A is: ', currentPlayerA.name);
		console.log('Player B is: ', currentPlayerB.name);
	}

	currentPlayerChecker(htmlPlayerA, htmlPlayerB);
	if (allUnderFive) {
		throwDown(currentPlayerA, currentPlayerB);
		updateScoreBoard(scoreBoard);
		scoreKeeper(currentPlayerA, currentPlayerB);
		winnerChecker(currentPlayerA, currentPlayerB);
	} else {
		console.log('call resetgame func to play another tournament');
	}
}

function resetGame() {
	allPlayers.player1.wins = 0;
	allPlayers.player2.wins = 0;
	allPlayers.player3.wins = 0;
	allPlayers.player4.wins = 0;
	pageIndividualScores.forEach(function(e) {
		e.innerText = 0;
	});
	allUnderFive = true;
	console.groupEnd();
	console.group('%cstart new round!', 'font-size: 14px; color: red;');
	playButton.innerText = 'Play Round!';
	playerThrows.innerText = 'Hit the button to Play the Game!!';
	winnerText.innerText = '';
	player1ScoreNumber.innerText = 0;
	player2ScoreNumber.innerText = 0
	winner.style.cssText = 'color: black';
	playButton.onclick = gamePlayer;
	// console.log(document.getElementById('score-row').children);
	// .style = 'color: black';
}

playButton.onclick = gamePlayer;
