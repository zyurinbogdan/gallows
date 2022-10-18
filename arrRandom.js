function getRandomArrayElement(words){
    return words[Math.floor(Math.random()*words.length)]
 }

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
]
console.log(getRandomArrayElement(words))