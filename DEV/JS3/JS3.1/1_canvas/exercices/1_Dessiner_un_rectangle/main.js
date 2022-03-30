'use strict';

document.addEventListener('DOMContentLoaded', function() {
    draw();
});

function draw() {
    let canvas = document.getElementById('canvas');

    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.strokeRect(10, 10, 50, 50);

    ctx.strokeStyle = 'green';
    ctx.strokeRect(70, 10, 50, 50);

    ctx.fillStyle = 'red';
    ctx.fillRect(130, 10, 50, 50);

}
