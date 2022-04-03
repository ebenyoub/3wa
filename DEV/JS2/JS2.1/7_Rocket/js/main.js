'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

const billboard = document.querySelector('#billboard span');
const rocket = document.getElementById('rocket');
const firingbutton = document.getElementById('firing-button');
let count = 10;
let IMG_PATH = 'images/';

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function countdown() {
    updateRocket('rocket2.gif');
    firingbutton.removeEventListener('click', countdown);
    firingbutton.classList.add('disabled');
    let timer = setInterval(() => {
        billboard.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timer);
            updateRocket('rocket3.gif');
            rocket.classList.add('tookOff');
        }
    }, 1000);
}

function updateRocket(filename) {
    rocket.src = IMG_PATH + filename;
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    firingbutton.addEventListener('click', countdown);
});
