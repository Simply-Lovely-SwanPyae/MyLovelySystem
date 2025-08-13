const playButton = document.getElementById('playMusic');
const music = document.getElementById('music');

playButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playButton.textContent = 'Pause Music';
    } else {
        music.pause();
        playButton.textContent = 'Play Music';
    }
});
