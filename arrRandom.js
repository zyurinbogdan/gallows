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

export default function getRandomArrayElement () {
    return words[Math.floor(Math.random()*words.length)];
}