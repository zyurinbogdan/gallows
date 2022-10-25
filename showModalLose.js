export default function showModalLose (word) {
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