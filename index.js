import addLetter from "./addLetter.js";
import restartBtn from "./restartBtn.js";
import getRandomArrayElement from "./arrRandom.js";
import playerWins from "./playerWins.js";

const answer = document.getElementsByClassName('answer')[0];
const buttonOk = document.getElementById('knopkaOk');
const input = document.getElementById('name');
const restart = document.getElementById('restart');
const word = getRandomArrayElement();



buttonOk.addEventListener('click', () => {
    if (/^[а-я]{1,1}$/.test(input.value)) {
        if ( checkLetter(input.value, word)) {
            addLetter(input.value, word);
        } else {
            changeImg();
        }
        input.value = '';
    } else {
        alert('Введите 1 букву от а до я');
        input.value = '';
    }
})

buttonOk.addEventListener('click',() => {
    if (playerWins()) {
        showModalWin();
    }
    if (playerLose()) {
        showModalLose(word);
    }
});

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

let changeImg = (function () {
    let i = 0;
    const img = document.getElementById('img');
    const imgArr = ['./imgs/2.png', './imgs/3.png', './imgs/4.png'];
    return () => {
        img.src = imgArr[i++];
    };
})();

function playerLose () {
    const img = document.getElementById('img');
    const imgArr = ['./imgs/2.png', './imgs/3.png', './imgs/4.png'];
    if (img.src === imgArr[2]) {
        return;
    }
}

function checkLetter (guess, word) {
    return word.split('').some((letter) => letter === guess);
}


function showModalWin () {
    const modalWrap = document.createElement('div');
    modalWrap.classList.add('modalWrap');
    const text = document.createElement('p');
    text.classList.add('text');
    text.innerText = 'вы победили';
    const newGameWrap = document.createElement('div');
    newGameWrap.classList.add('newGameWrap');
    const newGameBtn = document.createElement('p');
    newGameBtn.classList.add('newGameBtn');
    newGameBtn.innerText = 'начать новую игру';
    newGameBtn.addEventListener('click', () => location.reload());
    document.body.append(modalWrap);
    modalWrap.append(text);
    modalWrap.append(newGameWrap);
    newGameWrap.append(newGameBtn);
}

function showModalLose (word) {
    const modalWrap = document.createElement('div');
    modalWrap.classList.add('modalWrap');
    const text = document.createElement('p');
    text.classList.add('text');
    text.innerText = `вы проиграли, правильное слово ${word}`;
    const newGameWrap = document.createElement('div');
    newGameWrap.classList.add('newGameWrap');
    const newGameBtn = document.createElement('p');
    newGameBtn.classList.add('newGameBtn');
    newGameBtn.innerText = 'начать новую игру';
    newGameBtn.addEventListener('click', () => location.reload());
    document.body.append(modalWrap);
    modalWrap.append(text);
    modalWrap.append(newGameWrap);
    newGameWrap.append(newGameBtn);
}