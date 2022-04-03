'use strict';

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let circle = {
    color: "#FF0000",
    radius: 10,
    x: 10,
    y: 10
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom
let ctx;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function() {
    canvasDom = document.getElementById('canvas');
    ctx = canvasDom.getContext('2d');
    displayForm();
    document.addEventListener('keydown', moveForm);
});

function displayForm() {
    // ctx.clearRect(0, 0, canvasDom.width, canvasDom.height)
    ctx.fillStyle = '#DDDDDD';
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
    ctx.beginPath();
    ctx.fillStyle = circle.color;
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fill();
}

function moveForm(event) {
    console.log(event.key);
    switch (event.key) {
        case 'ArrowLeft':
            circle.x - circle.radius > 0 ? circle.x -= 5 : 0;
            break;
        case 'ArrowRight':
            circle.x < canvasDom.width - circle.radius ? circle.x += 5 : 0;
            break;
        case 'ArrowUp':
            circle.y - circle.radius > 0 ? circle.y -= 5 : 0;
            break;
        case 'ArrowDown':
            circle.y < canvasDom.height - circle.radius ? circle.y += 5 : 0;
            break;
    }
    displayForm();
}
