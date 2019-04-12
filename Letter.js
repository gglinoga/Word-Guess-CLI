function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.guessSwitch = function () {
        const underS = "_"
        if (this.guessed === false) {
            return underS;
        } else {
            return this.letter;
        }
    };
    this.guessCheck = function (guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    };
};

module.exports = Letter;

// var x = new Letter('x');
// var y = new Letter('y');
// var z = new Letter('z');

// console.log(x);
// console.log(x.guessSwitch());
// x.guessCheck('x');
// console.log(x);
// console.log(x.guessSwitch());