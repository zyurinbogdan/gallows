export default function checkLetter (guess, word) {
    return word.split('').some((letter) => letter === guess);
}