'use strict';

const zombie = {
    picture: 'img/zombie.png',
    domObject: null,
    spriteSize: 100,
    nbSprite: 11
};

const animation = {
    position: null,
    fps: 5,
    id: null
};

document.addEventListener('DOMContentLoaded', function() {
    zombie.domObject = document.querySelector('#zombietomb');
    zombie.id = requestAnimationFrame(zombieAction);
});

function zombieAction() {
    setTimeout(function() {
        animation.id = requestAnimationFrame(zombieAction);
    }, 1000 / animation.fps);
    zombie.domObject.style.background = `url(${zombie.picture}) ${-zombie.spriteSize * animation.position}px 0px`;
    animation.position++;
    if (animation.position > zombie.nbSprite) {
        animation.position = 0;
    }
}
