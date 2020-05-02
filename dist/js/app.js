'use strict';

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.volume = 0.1;
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(this.classList.remove('playing'));
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
