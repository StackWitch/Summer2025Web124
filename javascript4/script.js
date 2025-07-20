/*
  Sadie Coleman
  Date: 2025-07-20
  Project: JavaScript30 #11 – Custom Video Player
  Source: https://javascript30.com

  Description:
  - Handles all video player functionality:
    - Play/pause toggle via button and video click.
    - Update play/pause button icon.
    - Skip forward/backward buttons.
    - Volume and playback speed sliders.
    - Updates progress bar as video plays.
    - Click and drag on progress bar to scrub video.
    - Keyboard shortcuts for play/pause, skipping, and fullscreen toggle.
  - Designed for clean, modular, and accessible video control.
*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Play/pause toggle
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play/pause icon
function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

// Skip buttons (fast forward/back)
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Range sliders (volume, playback speed)
function handleRangeUpdate() {
    video[this.name] = this.value;
}

// Update progress bar
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}
video.addEventListener('timeupdate', handleProgress);

// Click to scrub
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Keyboard controls
function handleKey(e) {
    switch (e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowRight':
            video.currentTime += 5;
            break;
        case 'ArrowLeft':
            video.currentTime -= 5;
            break;
        case 'KeyF':
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                player.requestFullscreen();
            }
            break;
    }
}

// Event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => {
    range.addEventListener('change', handleRangeUpdate);
    range.addEventListener('mousemove', handleRangeUpdate);
});

// Scrub bar interaction
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// Keyboard support
document.addEventListener('keydown', handleKey);

window.addEventListener('DOMContentLoaded', () => {
    video.play().catch(err => {
        console.warn('Autoplay failed:', err.message);
    });
});
