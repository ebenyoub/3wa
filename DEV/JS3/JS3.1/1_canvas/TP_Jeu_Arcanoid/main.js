'use strict';

let ball = {
    color: "#eee",
    radius: 10
};

let paddle = {
    color: "#FFFFFF",
    width: 100,
    height: 20,
    direction: 0,
    speed: 10
};

let game = {
    background: '#000000',
    width: 800,
    height: 600,
    direction: -1,
    speed: 5
}

let animationId = null;
let canvasDom;
let ctx;
let over = 'GAME OVER';
let run = false;
let pause = false;
let start = true;


document.addEventListener('DOMContentLoaded', function() {

    initGame();

    displayGame();

    document.addEventListener('keydown', movePaddle);

});

function initGame() {
    game.canvasDom = document.querySelector('#canvas');
    game.canvasDom.width = game.width;
    game.canvasDom.height = game.height;
    ball.x = (game.canvasDom.width / 2);
    ball.y = 490;
    paddle.x = (game.canvasDom.width / 2) - (paddle.width / 2);
    paddle.y = 500;

    game.ctx = game.canvasDom.getContext('2d');
}

function playGame() {
    ball.y += game.speed * game.direction;
    detectCollision();
    displayGame();

    animationId = window.requestAnimationFrame(playGame);
    if (ball.y + ball.radius >= game.canvasDom.height) {
        window.cancelAnimationFrame(animationId);
        gameOver();
    }
}

function detectCollision() {
    if (ball.y - ball.radius <= 0 ||
        (ball.y + ball.radius >= paddle.y &&
            ball.x + ball.radius >= paddle.x &&
            ball.x + ball.radius <= paddle.x + paddle.width)) {
        game.direction *= -1;
    }
}

function gameOver() {
    run = false;
    game.ctx.font = '48px serif';
    game.ctx.fillStyle = 'green';
    game.ctx.fillText(over,
        (game.canvasDom.width / 2) -
        ((game.ctx.measureText(over).width / 2)),
        game.canvasDom.height / 2);
}

function displayGame() {
    game.ctx.clearRect(0, 0, game.canvasDom.width, game.canvasDom.height);
    game.ctx.fillStyle = game.background;
    game.ctx.fillRect(0, 0, game.canvasDom.width, game.canvasDom.height);

    game.ctx.beginPath();
    game.ctx.fillStyle = ball.color;
    game.ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    game.ctx.fill();

    game.ctx.fillStyle = paddle.color;
    game.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function movePaddle(event) {
    switch (event.key) {
        case 'ArrowLeft':
            paddle.x - paddle.speed >= 0 ? paddle.x -= paddle.speed : 0;
            break;
        case 'ArrowRight':
            paddle.x + paddle.width + paddle.speed <= game.canvasDom.width ? paddle.x += paddle.speed : 0;
            break;
        case ' ':
            if (!run) {
                if (start) {
                    start = false;
                    playGame();
                }
                else {
                    initGame();
                    start = true;
                }
            }
            else {
                if (!pause) {
                    pause = true;
                    window.cancelAnimationFrame(animationId);
                }
                else {
                    pause = false;
                    animationId = window.requestAnimationFrame(playGame);
                }
            }
            break;
    }
}
