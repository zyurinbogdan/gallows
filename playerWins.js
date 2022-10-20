export default function playerWins () {
    const answerCollection = [...document.getElementsByClassName('letter')];
    return answerCollection.every((item) => item.innerText !== '_')
}