const dice = document.querySelector('.dice');
let side = 1;

const roll = (face) => {
    switch (face) {
        case 1:
            dice.classList.add('face1');
            break;
        case 2:
            dice.classList.add('face2');
            break;
        case 3:
            dice.classList.add('face3');
            break;
        case 4:
            dice.classList.add('face4');
            break;
        case 5:
            dice.classList.add('face5');
            break;
        case 6:
            dice.classList.add('face6');
            break;
        default:
            break;
    }
}

dice.addEventListener('click', () => {
    let random = Math.floor(Math.random()*6+1);
    dice.className = 'dice';
    roll(random);
});