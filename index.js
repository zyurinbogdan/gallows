import addLetter from "./addLetter.js";
import restartBtn from "./restartBtn.js";


const answer = document.getElementsByClassName('answer')[0];
const buttonOk = document.getElementById('knopkaOk');
const input = document.getElementById('name');
const restart = document.getElementById('restart');

buttonOk.addEventListener('click', () => {
    if (/^[а-я]{1,1}$/.test(input.value)) {
        addLetter(input.value, word);
        input.value = '';
    } else {
        alert('Введите 1 букву от а до я');
        input.value = '';
    }
})

restart.addEventListener('click', restartBtn);

const words = [
    'монитор',
    'кабинет',
    'арбуз',
    'ручка',
    'машина',
    'морковка',
    'школа',
    'телерадиокомпания',
    'еж',
];

function getRandomArrayElement (words) {
    return words[Math.floor(Math.random()*words.length)];
}

const word = getRandomArrayElement(words);



(function setupAnswerArr (word) {
    for (let i = 0; i < word.length; i++) {
        const newSpan = document.createElement('span');
        newSpan.classList.add('letter');
        newSpan.innerText = '_';
        answer.append(newSpan);
        console.log(word);
    }
})(word);









