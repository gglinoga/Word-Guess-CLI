function Letter(letter) {
	this.letter = letter;
	this.guessed = false;
	this.guessSwitch = function() {
		const underS = "_"
		if (this.guessed === false) {
			return underS;
		} else {
			return this.letter;
		}
	};
	this.guessCheck = function(guess) {
		if (guess === this.letter) {
			this.guessed = true;
		}
	};
};
module.exports = Letter;