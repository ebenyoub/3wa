'use strict';

document.addEventListener('DOMContentLoaded', () => {
    drawSquare();
    dessinerTriangle();
    dessinerTexte();
    dessinerImage('honeycomb.png');
});

function drawSquare() {
    let canvas = document.getElementById('tutoriel');

    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);

    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
}

function dessinerTriangle() {
    let canvas = document.getElementById('tutoriel');

    let ctx = canvas.getContext('2d');

    ctx.moveTo(110, 30);
    ctx.lineTo(180, 30);
    ctx.lineTo(110, 100);
    ctx.fill();
}

function dessinerTexte() {
    let ctx = document.getElementById('texte').getContext('2d');
    ctx.font = '48px serif';
    ctx.fillStyle = 'red';
    ctx.fillText('Hello', 10, 50);

    let sp = ctx.measureText('Hello' + ' ').width;

    ctx.fillStyle = 'green';
    ctx.fillText('world', 10, 50 + 48);
}

function dessinerImage(fond) {

    let ctx = document.getElementById('image').getContext('2d');
    let img = new Image();
    img.src = fond;
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.moveTo(30, 200);
        ctx.lineTo(80, 80);
        ctx.lineTo(140, 120);
        ctx.lineTo(200, 30);
        ctx.lineTo(230, 180);
        ctx.stroke();
        ctx.closePath();
    }

}
