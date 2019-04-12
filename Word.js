var Letter = require('./Letter.js');

function Word(guessWord) {
    this.str = guessWord;
    this.gwArr = [];
    this.displayWord = [];
    for (var i = 0; i < guessWord.length; i++) {
        var guess = guessWord.charAt(i);
        var newLetter = new Letter(guess);
        this.gwArr.push(newLetter); //array of new letter obj for the word to be guessed (guessWord)
        // console.log(this.gwArr)
    }
    this.display = function () {
        this.displayWord = [];
        for (var i = 0; i < this.gwArr.length; i++) {
            var show = this.gwArr[i].guessSwitch();
            if (show) {
                // console.log(i, show);
                this.displayWord.push(show);
            }
        }



        //return string representing word, chars or underscore, concatenate
        // console.log(this.displayWord.join(" "));
    };
    this.checkGuess = function (guess) {
        //takes character as argument, calls letter.guessCheck on each letter obj.  forEach???
        for (var i = 0; i < this.gwArr.length; i++) {
            this.gwArr[i].guessCheck(guess);
            // console.log(this.gwArr[i])
        }
    }
}

module.exports = Word;

// var test = new Word("test");
// test.checkGuess("t");
// console.log(test.display());