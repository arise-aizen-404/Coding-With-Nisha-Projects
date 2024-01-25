const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime, elapsedTime = 0, intervalId;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function start() {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 10);
}

function stop() {
    clearInterval(intervalId);
    elapsedTime = Date.now() - startTime;
}

function reset() {
    clearInterval(intervalId);
    elapsedTime = 0;
    display.textContent = '00:00:00';
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    updateDisplay(elapsedTime);
}

function updateDisplay(time) {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    display.textContent = formattedTime;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}
