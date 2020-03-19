var rock = 0;
var paper = 1;
var scissors = 2;
var player1Toss;
var player2Toss;
var player1Wins = 0;
var player2Wins = 0;
var player1ScoreNumber = document.getElementById('player1-score').children[1];
var player2ScoreNumber = document.getElementById('player2-score').children[1];
var playerThrows = document.getElementById('round-results').children[0];
var winnerText = document.getElementById('round-results').children[1];
var playButton = document.getElementById('play-button');
var winner;
// console.log(document.getElementsByClassName('player-score-number'));
console.group('%cstart new round!', 'font-size: 14px; color: red;');
function assignToss() {
	function generateToss() {
		return parseInt(Math.random() * 10) % 3;
	}
	var objNum = [ 'rock', 'paper', 'scissors' ];
	player1Toss = generateToss();
	player2Toss = generateToss();
	console.log('Player1 throws a ' + objNum[player1Toss] + ', Player2 throws a ' + objNum[player2Toss]);
	playerThrows.innerHTML = 'Player1 throws a ' + objNum[player1Toss] + ', Player2 throws a ' + objNum[player2Toss];
	return;
}

function throwDown() {
	var winner;
	if (player1Toss === player2Toss) {
		winnerText.innerHTML = 'Tie, throw down again!';
		console.log('Tie, throw down again!');
	} else if (player1Toss === rock) {
		if (player2Toss === paper) {
			winner = 'Player 2';
			winnerText.innerHTML = 'Player 2 wins';
			console.log('Player 2 wins!');
			player2Wins++;
		} else {
			winner = 'Player 1';
			winnerText.innerHTML = 'Player 1 wins';
			console.log('Player 1 wins!');
			player1Wins++;
		}
	} else if (player1Toss === paper) {
		if (player2Toss === scissors) {
			winner = 'Player 2';
			winnerText.innerHTML = 'Player 2 wins';
			console.log('Player 2 wins!');
			player2Wins++;
		} else {
			winner = 'Player 1';
			winnerText.innerHTML = 'Player 1 wins';
			console.log('Player 1 wins!');
			player1Wins++;
		}
	} else if (player1Toss === scissors) {
		if (player2Toss === rock) {
			winner = 'Player 2';
			winnerText.innerHTML = 'Player 2 wins';
			console.log('Player 2 wins!');
			player2Wins++;
		} else {
			winner = 'Player 1';
			winnerText.innerHTML = 'Player 1 wins';
			console.log('Player 1 wins!');
			player1Wins++;
		}
	}
	// console.log(winner);
	return winner;
}

function scoreKeeper() {
	player1ScoreNumber.innerHTML = player1Wins;
	player2ScoreNumber.innerHTML = player2Wins;
	console.log('SCORE: Player1: ' + player1Wins + '. Player2: ' + player2Wins + '.');
}

function winnerChecker(a, b) {
	console.count('Round Number');
	if (a === 3 || b === 3) {
		playButton.innerText = 'Game over!';
		playButton.onclick = resetGame;
		if (a === 3) {
			console.log('Player 1 Wins the Whole Match!!');
			winnerText.innerText = 'Player 1 Wins the Whole Match!!';
			winner = Array.from(document.getElementById('player1-score').children);
			document.getElementById('player1-score').children[0].style.cssText = 'color: green';
			player1ScoreNumber.style.cssText = 'color: green';
		} else {
			console.log('Player 2 Wins the Whole Match!!');
			winnerText.innerText = 'Player 2 Wins the Whole Match!!';
			winner = Array.from(document.getElementById('player2-score').children);
			document.getElementById('player2-score').children[0].style.cssText = 'color: green';
			player2ScoreNumber.style.cssText = 'color: green';
		}
	}
}

function gamePlayer() {
	assignToss();
	throwDown();
	scoreKeeper();
	winnerChecker(player1Wins, player2Wins);
}

function resetGame() {
	player1Toss = null;
	player2Toss = null;
	player1Wins = 0;
	player2Wins = 0;
	console.groupEnd();
	console.group('%cstart new round!', 'font-size: 14px; color: red;');
	// console.countReset();
	playButton.innerText = 'Play Round!';
	playerThrows.innerText = 'Hit the button to Play the Game!!';
	winnerText.innerText = '';
	player1ScoreNumber.innerHTML = player1Wins;
	player2ScoreNumber.innerHTML = player2Wins;
	winner.forEach((element) => {
		element.style.cssText = 'color: black';
	});
	playButton.onclick = gamePlayer;
	// console.log(document.getElementById('score-row').children);
	// .style = 'color: black';
}

// assignToss();
// throwDown();
// scoreKeeper();
// while (player1Wins < 3 && player2Wins < 3) {
// 	document.onclick = function() {
// 		assignToss();
// 		throwDown();
// 		scoreKeeper();
// 	};
// }
playButton.onclick = gamePlayer;
