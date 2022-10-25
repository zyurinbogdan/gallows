import addLetter from "./addLetter.js";
import restartBtn from "./restartBtn.js";
import getRandomArrayElement from "./arrRandom.js";
import playerWins from "./playerWins.js";
import { changeImg } from "./changeImg.js";
import checkLetter from "./CheckLetter.js";
import showModalWin from "./showModalWin.js";
import showModalLose from "./showModalLose.js";
import { counter } from "./counter.js";
import playerLose from "./playerLose.js";
import { countMistakes } from "./counter.js";

const answer = document.getElementsByClassName('answer')[0];
const buttonOk = document.getElementById('knopkaOk');
const input = document.getElementById('name');
const restart = document.getElementById('restart');
const word = getRandomArrayElement();

buttonOk.addEventListener('click', () => {
    if (/^[а-я]{1,1}$/.test(input.value)) {
        if ( checkLetter(input.value, word)) {
            addLetter(input.value, word);
            if (playerWins()) {
                showModalWin();
            }
        } else {
            changeImg();
            counter();
            if (playerLose(countMistakes)) {
                showModalLose(word);
            }
        }
        input.value = '';
    } else {
        alert('Введите 1 букву от а до я');
        input.value = '';
    }
})

restart.addEventListener('click', restartBtn);

(function setupAnswerArr (word) {
    for (let i = 0; i < word.length; i++) {
        const newSpan = document.createElement('span');
        newSpan.classList.add('letter');
        newSpan.innerText = '_';
        answer.append(newSpan);
        console.log(word);
    }
})(word);