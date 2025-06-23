function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');

    const colors = ["#ff66cc", "#cc66ff", "#ff33aa", "#d966ff", "#ff99cc"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    key.style.borderColor = randomColor;
    key.style.boxShadow = `0 0 1rem ${randomColor}`;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    this.style.borderColor = "";
    this.style.boxShadow = "";
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', function () {
        const keyCode = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

        this.classList.add('playing');

        const colors = ["#ff66cc", "#cc66ff", "#ff33aa", "#d966ff", "#ff99cc"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.borderColor = randomColor;
        this.style.boxShadow = `0 0 1rem ${randomColor}`;
    });

    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
