const video = document.getElementById("myVideo");
const pauseButton = document.getElementById("pauseButton");
const playButton = document.getElementById("playButton");

pauseButton.addEventListener("click", function() {
    video.pause();
    pauseButton.style.background = '#6abbf5';
    playButton.style.background = 'none';
});

playButton.addEventListener("click", function() {
    video.play();
    playButton.style.background = '#6abbf5';
    pauseButton.style.background = 'none';
});