const display = document.getElementById('display');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const equal = document.getElementById('equal');
const buttons = document.querySelectorAll('.btn-num, .btn-operater');

let currentInput = '';

function updateDisplay() {
    display.innerHTML = currentInput || '0';
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (button.classList.contains('btn-num') || button.classList.contains('btn-operater')) {
            currentInput += buttonText;
        }

        updateDisplay();
    });
});

backspace.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
});

clear.addEventListener('click', () => {
    currentInput = '';
    updateDisplay();
});

equal.addEventListener('click', () => {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = 'Error';
    }
    updateDisplay();
});

updateDisplay();

const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggler.classList.toggle('active');
});
