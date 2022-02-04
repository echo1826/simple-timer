let timer = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let functionInterval;



function startTimer(e) {
    e.preventDefault();
    console.log("startTimer");
    let hours = document.getElementById("hour").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;
    if(!hours) hours = 0;
    if(!minutes) minutes = 0;
    if(!seconds) seconds = 0;
    function start() {
        console.log("timer");
        // let updatedSeconds;
        // let updatedMinutes;
        // let updatedHours;
        if(hours > 0) {
            if(minutes === 0) {
                hours--;
                minutes = 60;
            }
        }
    
        if(seconds === 0) {
            minutes--;
            seconds = 60;
        }
        seconds--;
        console.log(`${hours}:${minutes}:${seconds}`);
        if(hours===0 && minutes === 0 && seconds === 0) clearInterval(functionInterval);
        timer.textContent = `${hours}:${minutes}:${seconds}`;
    }
    const interval = 1000;
    functionInterval = setInterval(() => start(), interval);
}

function stopTimer(e) {
    e.preventDefault();
    clearInterval(functionInterval);
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);