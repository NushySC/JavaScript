let number1 = 0;
let operator = null;
const input = document.querySelector('#number');

const calculation = (symbol) => {
    number1 = parseInt(input.value);
    operator = symbol;
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

const equal = () => {
    let number2 = parseInt(input.value);
    switch (operator) {
        case '+':
            input.value = number1 + number2;
            break;
        case '-':
            input.value = number1 - number2;
            break;
        case '*':
            input.value = number1 * number2;
            break;
        case '/':
            input.value = number1 / number2;
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const plusBtn = document.querySelector('#add');
    const minusBtn = document.querySelector('#minus');
    const timesBtn = document.querySelector('#times');
    const divideBtn = document.querySelector('#divide');
    const equalBtn = document.querySelector('#equal');

    plusBtn.addEventListener('click', () => {
        calculation('+');
    });
    minusBtn.addEventListener('click', () => {
        calculation('-');
    });
    timesBtn.addEventListener('click', () => {
        calculation('*');
    });
    divideBtn.addEventListener('click', () => {
        calculation('/');
    });
    equalBtn.addEventListener('click', equal);
})
