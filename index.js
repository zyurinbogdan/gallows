

function validation (guess) {
    if( /[а-я]/.test(value) ) {
        function addLetter (guess, word, answerArr, remainingLetters, attempts) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess && answerArr[i] === '_') {
                    answerArr[i] === guess;
                    remainingLetters--;
                } else {
                    attempts--;
                }
            }
        }
    }
}





