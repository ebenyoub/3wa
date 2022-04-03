var button = document.getElementById('toggle-forme');
var forme = document.querySelector('.forme');


button.addEventListener('click', buttonClick);

forme.addEventListener('mouseover', formeOver);
forme.addEventListener('mouseout', formeOut);
forme.addEventListener('dblclick', formeDbl);


function buttonClick() {
    forme.classList.toggle('hide');
}

function formeOver() {
    console.log('Survole de la forme');
    this.classList.add('survol');
}

function formeOut() {
    console.log('Suppression du vert');
    this.classList.remove('survol', 'dblclick');
}

function formeDbl() {
    console.log('Double click')
    this.classList.add('dblclick');
}
