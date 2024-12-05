const background = document.getElementById('background');

function createText() {
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = 'XHOTEL';
    text.style.top = Math.random() * 100 + '%';
    text.style.left = Math.random() * 100 + '%';
    background.appendChild(text);

    setTimeout(() => {
        text.remove();
    }, 4000);
}

setInterval(createText, 500);
