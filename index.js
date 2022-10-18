const answer = document.getElementsByClassName('answer')[0];
const buttonOk = document.getElementById('knopkaOk');
const input = document.getElementById('name');

buttonOk.addEventListener('click', () => {
    addLetter(input.value)
})


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

const attempts = 3;




(function setupAnswerArr (word) {
    for (let i = 0; i < word.length; i++) {
        const newSpan = document.createElement('span');
        newSpan.classList.add('letter');
        newSpan.innerText = '_';
        answer.append(newSpan);
        console.log(word);
    }
})(word);



function checkUnderscore () {
    const answerCollection = [...document.getElementsByClassName('letter')];
    answerCollection.every()
}


function addLetter (guess, word) {
    const answerCollection = document.getElementsByClassName('letter');
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            answerCollection[i].innerText = guess;
        }
    }
}


