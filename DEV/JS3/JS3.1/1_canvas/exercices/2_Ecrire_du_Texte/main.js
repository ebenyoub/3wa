'use strict';


// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener('DOMContentLoaded', function() {
    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = '48px serif';
    ctx.fillStyle = 'red';
    ctx.fillText('Hello', 10, 50);

    let sp = ctx.measureText('Hello' + ' ').width;

    ctx.fillStyle = 'green';
    ctx.fillText('world', 10, 50 + 48);

});
