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

export const word = getRandomArrayElement(words);