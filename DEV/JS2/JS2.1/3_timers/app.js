const time = document.querySelector('.time');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

let heures = 0;
let minutes = 0;
let secondes = 0;
let centieme = 0;

let intId;
let state = false;

time.innerHTML = '00 : 00 : 00'

start.addEventListener('click', () => {
    if (!state) {
        intId = window.setInterval(() => {
            if (centieme < 100) {
                centieme++;
            }
            else {
                centieme = 0;
                if (secondes < 59) {
                    secondes += 1;
                }
                else {
                    secondes = 0;
                    if (minutes < 59) {
                        minutes += 1;
                    }
                    else {
                        minutes = 0;
                        heures += 1;
                    }
                }
            }
            state = true;
            start.style.backgroundColor = 'green';
            start.style.color = 'white';
            start.innerHTML = 'En cours';
            time.textContent = `${heures < 10 ? '0' + String(heures) : String(heures)}
                            : ${minutes < 10 ? '0' + String(minutes) : String(minutes)}
                            : ${secondes < 10 ? '0' + String(secondes) : String(secondes)}
                            . ${centieme < 10 ? '0' + String(centieme) : String(centieme)}`;
        }, 10);
    }
    else {
        clearInterval(intId);
        start.style.backgroundColor = 'darkred';
        start.style.color = 'white';
        start.innerHTML = 'Reprendre'
        state = false;
    }
})

reset.addEventListener('click', () => {
    clearInterval(intId);
    start.style.backgroundColor = 'buttonface';
    start.style.color = 'black';
    state = false;
    start.innerHTML = 'Start';
    start.color = 'black';
    time.innerHTML = '00 : 00 : 00';
    heures = 0;
    minutes = 0;
    secondes = 0;
    centieme = 0;
})
