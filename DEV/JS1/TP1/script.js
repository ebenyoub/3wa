/*TP 1 - Réaliser un mini-jeu de devinette. 

Cette activité utilise:
- Les variables
- Les conditions
- Les instructions (les boucles)

Objectif: Ecrire un programme qui fait deviner un nombre entre 1 et 100.


Le jeu choisit aléatoirement un nombre entre 1 et 100, 
// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

puis il met le joueur au défi de le deviner en 7 tentatives maximum. 
Le joueur devine ce nombre en faisant des propositions. 
À chaque tour, le joueur doit être informé s'il a deviné ou non le bon nombre 
— si ce n'est pas le cas, le programme lui dit si le nombre qu’il a saisi est trop petit ou trop grand, 
On considèrera que la saisie du joueur est toujours un nombre valide. 

Le jeu se termine quand le joueur a deviné le nombre mystère, 
ou s'il a épuisé ses 7 chances. 
A la fin du jeu, le joueur a la possibilité de débuter une nouvelle partie.

Commencer par créer 2 fichiers: index.html et main.js.*/


const btn = document.querySelector('#btn');
const msg = document.querySelector('.msg');
const pts = document.querySelector('.point');
const txt = document.querySelector('#in');
var solution = Math.floor(Math.random() * 100) + 1;
console.log("solution = " + solution);
pts.innerHTML = 'Vous avez 7 essais.'
var start = true;

var i = 7;
var b = 0;

btn.addEventListener('click', () => {
    if (start) {
        let val = Number(txt.value);

        if (isNaN(val) || txt.value === '') {
            txt.focus();
            msg.innerHTML = "Entrez un nombre."
        } else if (val < 0 || val > 100) {
            msg.innerHTML = "Choisissez un nombre compris entre 0 et 100 !";
        } else {
            b++;
            i--;
            i > 0 && i <= 7 ? gameOn(val) : gameOff();
        }
        txt.value = '';
    } else {
        resetGame();
    }
})

function resetGame() {
    i = 7;
    b = 0;
    txt.focus();
    msg.innerHTML = "";
    pts.innerHTML = "Vous avez 7 essais."
    start = true;
    solution = Math.floor(Math.random() * 100) + 1;
    console.log('solution = '+ solution);
    btn.value = "Vérifier";
    txt.value = '';
}

function gameOn(val) {
    txt.focus();
    pts.innerHTML = `Il vous reste ${i} essais.`;
    if (val == solution) {
        nbFound(val);
    } else if (val < solution) {
        msg.innerHTML = "C'est plus !";
    } else {
        msg.innerHTML = "C'est moins !";
    }
}

function gameOff() {
    pts.innerHTML = "Vous avez perdu !";
    msg.innerHTML = `La solution était ${solution}`;
    btn.value = "Recommencer";
    start = false;
}

function nbFound(val) {
    txt.blur();
    pts.innerHTML = `Bravo, Vous avez trouvé en ${b} coups!`;
    btn.value = "Recommencer";
    msg.innerHTML = "";
    start = false;
}