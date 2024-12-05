const background = document.getElementById('background');

// Random position and animation for XHOTEL text
function createText() {
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = 'XHOTEL';
    text.style.top = Math.random() * 100 + '%';
    text.style.left = Math.random() * 100 + '%';
    background.appendChild(text);

    // Remove the text after animation ends
    setTimeout(() => {
        text.remove();
    }, 4000);
}

// Generate text every 500ms
setInterval(createText, 500);
