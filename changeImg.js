export let changeImg = (function () {
    let i = 0;
    const imgArr = ['./imgs/2.png', './imgs/3.png', './imgs/4.png'];
    const img = document.getElementById('img');
    return () => {
        img.src = imgArr[i++];
    };
})();