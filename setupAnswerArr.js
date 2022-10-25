export default function setupAnswerArr (word, answer) {
    for (let i = 0; i < word.length; i++) {
        const newSpan = document.createElement('span');
        newSpan.classList.add('letter');
        newSpan.innerText = '_';
        answer.append(newSpan);
        console.log(word);
    }
}