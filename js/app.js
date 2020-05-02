'use strict';

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
    console.log(e.keyCode);
}

window.addEventListener('keydown', playSound);
