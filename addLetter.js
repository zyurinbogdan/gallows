export default function addLetter (guess, word) {
    const answerCollection = document.getElementsByClassName('letter');
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            answerCollection[i].innerText = guess;
        }
    }
}