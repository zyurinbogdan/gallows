export default function showModalWin () {
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