import addLetter from "./addLetter.js";
import restartBtn from "./restartBtn.js";
import getRandomArrayElement from "./arrRandom.js";
import playerWins from "./playerWins.js";
import { changeImg } from "./changeImg.js";
import checkLetter from "./CheckLetter.js";
import showModal from "./showModal.js";
import { counter } from "./counter.js";
import playerLose from "./playerLose.js";
import { countMistakes } from "./counter.js";
import setupAnswerArr from "./setupAnswerArr.js";



const answer = document.getElementsByClassName('answer')[0];
const buttonOk = document.getElementById('knopkaOk');
const input = document.getElementById('name');
const restart = document.getElementById('restart');
const word = getRandomArrayElement();

setupAnswerArr(word, answer);

buttonOk.addEventListener('click', () => {
    if (/^[а-я]{1,1}$/.test(input.value)) {
        if ( checkLetter(input.value, word)) {
            addLetter(input.value, word);
            if (playerWins()) {
                showModal('Вы победили');
            }
        } else {
            changeImg();
            counter();
            if (playerLose(countMistakes)) {
                showModal(`Вы проиграли, правильное слово ${word}`);
            }
        }
        input.value = '';
    } else {
        alert('Введите 1 букву от а до я');
        input.value = '';
    }
})

restart.addEventListener('click', restartBtn);

