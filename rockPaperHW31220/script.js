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
	playerOneWins   : player1.wins,
	playerTwoWins   : player2.wins,
	playerThreeWins : player3.wins,
	playerFourWins  : player4.wins
};
// var rock = 0;
// var paper = 1;
// var scissors = 2;

// var player1Toss;
// var player2Toss;
// var player1Wins = 0;
// var player2Wins = 0;

// console.log(document.getElementsByClassName('player-score-number'));

console.group('%cstart new round!', 'font-size: 14px; color: red;');
function assignToss(playerA, playerB) {
	function generateToss() {
		return parseInt(Math.random() * 10) % 3;
	}
	// var objNum = [ 'rock', 'paper', 'scissors' ];
	[ playerA ].currentToss = hands[generateToss()];
	console.log(playerA);
	[ playerB ].currentToss = hands[generateToss()];
	console.log(playerB);
	console.log('Player1 throws a ' + [ playerA ].curentToss + ', Player2 throws a ' + [ playerB ].curentToss);
	playerThrows.innerHTML =
		'Player1 throws a ' + [ playerA ].curentToss + ', Player2 throws a ' + [ playerB ].curentToss;
	return;
}

function throwDown(playerA, playerB) {
	var winner;
	if ([ playerA ].currentToss === [ playerB ].currentToss) {
		winnerText.innerHTML = 'Tie, throw down again!';
		console.log('Tie, throw down again!');
	} else if ([ playerA ].currentToss === 'rock') {
		if ([ playerB ].currentToss === 'paper') {
			winner = 'Player 2';
			winnerText.innerHTML = 'Player 2 wins';
			console.log('Player 2 wins!');
			[ playerB ].wins++;
		} else {
			winner = 'Player 1';
			winnerText.innerHTML = 'Player 1 wins';
			console.log('Player 1 wins!');
			[ playerA ].wins++;
		}
	} else if ([ playerA ].curentToss === 'paper') {
		if ([ playerB ].currentToss === 'scissors') {
			winner = 'Player 2';
			winnerText.innerHTML = 'Player 2 wins';
			console.log('Player 2 wins!');
			[ playerB ].wins++;
		} else {
			winner = 'Player 1';
			winnerText.innerHTML = 'Player 1 wins';
			console.log('Player 1 wins!');
			[ playerA ].wins++;
		}
	} else if ([ playerA ].currentToss === 'scissors') {
		if ([ playerB ].currentToss === 'rock') {
			winner = 'Player 2';
			winnerText.innerHTML = 'Player 2 wins';
			console.log('Player 2 wins!');
			[ playerB ].wins++;
		} else {
			winner = 'Player 1';
			winnerText.innerHTML = 'Player 1 wins';
			console.log('Player 1 wins!');
			[ playerA ].wins++;
		}
	}
	// console.log(winner);
	return winner;
}

function scoreKeeper() {
	player1ScoreNumber.innerHTML = [ player1 ].wins;
	player2ScoreNumber.innerHTML = [ player2 ].wins;
	console.log('SCORE: Player1: ' + [ player1 ].wins + '. Player2: ' + [ player2 ].wins + '.');
}

function winnerChecker(a, b) {
	console.count('Round Number');
	if (a === 3 || b === 3) {
		playButton.innerText = 'Game over!';
		playButton.onclick = resetGame;
		if (a === 3) {
			console.log('Player 1 Wins the Whole Match!!');
			console.log('score board', scoreBoard);
			winnerText.innerText = 'Player 1 Wins the Whole Match!!';
			winner = Array.from(document.getElementById('player1-score').children);
			document.getElementById('player1-score').children[0].style.cssText = 'color: green';
			player1ScoreNumber.style.cssText = 'color: green';
		} else {
			console.log('Player 2 Wins the Whole Match!!');
			console.log('score board', scoreBoard);
			winnerText.innerText = 'Player 2 Wins the Whole Match!!';
			winner = Array.from(document.getElementById('player2-score').children);
			document.getElementById('player2-score').children[0].style.cssText = 'color: green';
			player2ScoreNumber.style.cssText = 'color: green';
		}
	}
}

function gamePlayer() {
	assignToss(player1, player2);
	throwDown(player1, player2);
	scoreKeeper();
	winnerChecker(player1.wins, player2.wins);
}

function resetGame() {
	player1.currentToss = null;
	player2.currentToss = null;
	player1.wins = 0;
	player2.wins = 0;
	console.groupEnd();
	console.group('%cstart new round!', 'font-size: 14px; color: red;');
	// console.countReset();
	playButton.innerText = 'Play Round!';
	playerThrows.innerText = 'Hit the button to Play the Game!!';
	winnerText.innerText = '';
	player1ScoreNumber.innerHTML = player1.wins;
	player2ScoreNumber.innerHTML = player2.wins;
	winner.forEach((element) => {
		element.style.cssText = 'color: black';
	});
	playButton.onclick = gamePlayer;
	// console.log(document.getElementById('score-row').children);
	// .style = 'color: black';
}

playButton.onclick = gamePlayer;
