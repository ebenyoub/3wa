/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.
Quand la div revient à son point d'origine, un modal s'affiche.
Le modal disparait lorsqu'on recommence le cycle.
Un deuxième bouton doit servir à masquer le modal.

*/
const btn = document.getElementById('moveDiv');
const square = document.querySelector('.red');
const modal = document.querySelector('.modal');
const hide = document.querySelector('#hideModal');
let count = 0;
let timeId;

document.addEventListener('DOMContentLoaded', () => {

    btn.addEventListener('click', () => {
        count > 3 ? count = 0 : 0;
        count++;
        console.log(count);
        movDiv(square, modal, count, hide);
    })

    hide.addEventListener('click', () => {
        modal.classList.remove('active');
    })
    
    modal.addEventListener('mouseover', () => {
        clearTimeout(timeId);
    })

})

function movDiv(square, modal, count, hide) {
    switch (count) {
        case 1:
            document.body.classList.remove('modal-active');
            timeId = setTimeout(() => {
                modal.classList.remove('active');
            }, 3000);
            square.style.marginLeft = '90%';
            square.style.backgroundColor = 'yellow';
            break;
        case 2:
            square.style.marginTop = '200px';
            square.style.backgroundColor = 'darkgreen';
            break;
        case 3:
            square.style.marginLeft = '0';
            square.style.backgroundColor = 'darkblue';
            break;
        default:
            document.body.classList.add('modal-active');
            modal.classList.add('active');
            square.style.marginTop = '0';
            square.style.backgroundColor = 'darkred';
            break;
    }
}
