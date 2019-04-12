var Letter = require('./Letter.js');

function Word(guessWord) {
	this.str = guessWord;
	this.gwArr = [];
	this.displayWord = [];
	for (var i = 0; i < guessWord.length; i++) {
		var guess = guessWord.charAt(i);
		var newLetter = new Letter(guess);
		this.gwArr.push(newLetter);
	}
	this.display = function() {
		this.displayWord = [];
		for (var i = 0; i < this.gwArr.length; i++) {
			var show = this.gwArr[i].guessSwitch();
			if (show) {
				this.displayWord.push(show);
			}
		}
	};
	this.checkGuess = function(guess) {
		for (var i = 0; i < this.gwArr.length; i++) {
			this.gwArr[i].guessCheck(guess);
		}
	}
}
module.exports = Word;