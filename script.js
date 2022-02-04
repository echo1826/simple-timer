let timer = document.getElementById("timer");

function start() {
    let hours = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

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
    
    timer.textContent = `${hours}:${minutes}:${seconds}`;
}