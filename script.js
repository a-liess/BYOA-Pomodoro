let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId = null;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerDisplay.textContent = timeString;
    document.title = `(${timeString}) Pomodoro Timer`;
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(timerId);
        startBtn.textContent = 'Start';
        isRunning = false;
    } else {
        startBtn.textContent = 'Pause';
        isRunning = true;
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft === 0) {
                clearInterval(timerId);
                alert('Time is up!');
                startBtn.textContent = 'Start';
                isRunning = false;
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerId);
    timeLeft = 25 * 60;
    updateDisplay();
    startBtn.textContent = 'Start';
    isRunning = false;
}

function setMode(mode) {
    clearInterval(timerId);
    isRunning = false;
    startBtn.textContent = 'Start';
    
    switch(mode) {
        case 'pomodoro':
            timeLeft = 25 * 60;
            break;
        case 'shortBreak':
            timeLeft = 5 * 60;
            break;
        case 'longBreak':
            timeLeft = 15 * 60;
            break;
    }
    updateDisplay();
} 