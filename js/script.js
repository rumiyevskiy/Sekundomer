// Timer fields

const minutesElement = document.querySelector('.minutes');

const secondsElement = document.querySelector('.seconds');

// Buttons

const startButton = document.querySelector('.buttons__start');

const waitButton = document.querySelector('.buttons__wait');

const resetButton = document.querySelector('.buttons__reset');


let minutes = 00,
    seconds = 00,
    interval,
    timer;

// Наполняем содержимым

function setTimer() {
    seconds++;

    if (seconds < 9) {
        secondsElement.innerText = "0" + seconds;
    }

    if (seconds > 9) {
        secondsElement.innerText = seconds;
    }

    if (seconds > 59) {
        minutes++;
        minutesElement.innerText = "0" + minutes;
        seconds = 0;
        secondsElement.innerText = "0" + seconds;
    }

    if (minutes < 9) {
        minutesElement.innerText = "0" + minutes;
    }

    if (minutes > 9) {
        minutesElement.innerText = minutes;
    }

    if (minutes > 59) {
        minutes = 0;
    }
}

// Запускаем таймер

function startTimer() {
    clearInterval(interval); // очищаем интервал, пауза
    interval = setInterval(setTimer, 1000); // запускаем таймер

    startButton.removeEventListener('click', startTimer);
    startButton.addEventListener('click', pauseClearTimer);

}

// Останавливаем и очищаем содержимое

function pauseClearTimer() {
    clearInterval(interval); // очищаем интервал

    minutes = 00;
    seconds = 00;
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    startButton.removeEventListener('click', pauseClearTimer);
    startButton.addEventListener('click', startTimer);
}

//Останавливаем 

function pauseTimer() {
    clearInterval(interval);

    startButton.removeEventListener('click', pauseClearTimer);
    startButton.addEventListener('click', startTimer);
}

//Очищаем содержимое и запускаем

function clearTimer() {
    clearInterval(interval);

    minutes = 00;
    seconds = 00;
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    startTimer();

}

//Останавливаем двойным кликом

function pauseTimerDbclick() {

    if (timer) {
        pauseTimer();
        clearTimeout(timer);
        timer = 0;
        return;
    }

    timer = setTimeout(() => timer = 0, 500);

}



// Listeners

startButton.addEventListener('click', startTimer);

waitButton.addEventListener('click', pauseTimerDbclick);

resetButton.addEventListener('click', clearTimer);

