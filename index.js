function setupAnswerArr (word) {
    
    let answerArr = [];

    for (let i = 0; i < word.length; i++) {
        answerArr[i] = '_';
    }

    return answerArr;
}