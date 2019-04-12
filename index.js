var Word = require('./Word.js');
var inquirer = require('inquirer');
wordArray = ['black', 'white', 'yellow', 'brown', 'red', 'chartreuse', 'cerulean blue'];
var newWord;
var wordGuess;
var count = 10;

function selectWord() {
	var j, x, i;
	for (i = wordArray.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = wordArray[i];
		wordArray[i] = wordArray[j];
		wordArray[j] = x
	}
	wordGuess = wordArray[j];
	newWord = new Word(wordGuess);
	count = (wordGuess.length) + 5;
};

function requestLetter() {
	inquirer.prompt([{
		type: "input",
		message: "Guess a letter",
		name: "guess"
	}, ]).then(function(inquirerResponse) {
		if (inquirerResponse) {
			count--;
			console.log(`You guessed the letter "${inquirerResponse.guess}"`);
			console.log(`You have ${count} guesses remaining!`)
			newWord.checkGuess(inquirerResponse.guess);
			newWord.display();
			var checkWin = newWord.displayWord.join("");
			console.log(checkWin);
			if (count === 0) {
				console.log('You are out of guesses, you lose!')
			} else if (!(checkWin.includes('_'))) {
				console.log("You win!");
			} else {
				requestLetter();
			}
		}
	});
}
// win condition, lose condition, guess count, fix display, game start???
selectWord();
requestLetter();