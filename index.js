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
            addLetter(input.value)
        }
        input.value = '';
    } else {
        alert('Введите 1 букву от а до я');
        input.value = '';
    }
})

buttonOk.addEventListener('click',() => {
    if (playerWins()) {
        showModal();
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

function changeImg () {
    let i = 0;
    const img = document.getElementById('img');
    const imgArr = ['./imgs/2.png', './imgs/3.png', './imgs/4.png'];
    return () => {
        img.src = imgArr[i++];
    };
}



function checkLetter (guess, word) {
    return word.split('').some((letter) => letter === guess);
}




