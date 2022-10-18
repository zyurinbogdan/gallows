


function setupAnswerArr (word) {
    
    let answerArr = [];

    for (let i = 0; i < word.length; i++) {
        answerArr[i] = '_';
    }

    return answerArr;
}

function validation (guess) {
    if( /[а-я]/.test(guess) ) {
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