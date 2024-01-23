const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);

let startTime, intervalId;

function start(){
    startTime = Date.now();
    intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const seconds = Math.floor(elapsedTime/1000);
        const minutes = Math.floor(seconds/60);
        const hours = Math.floor(minutes/60);
        const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        display.textContent = formattedTime;
    },10);
}
function stop(){
    clearInterval(intervalId);
}
function reset(){
    clearInterval(intervalId);
    display.textContent = '00:00:00';
}
function pad(num){
    return num<10 ? '0'+num : num;
}