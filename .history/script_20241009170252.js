// Get all necessary elements
const display = document.getElementById('display');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const equal = document.getElementById('equal');
const buttons = document.querySelectorAll('.btn-num, .btn-operater');

// Variable to hold current input for calculations
let currentInput = '';

// Function to update the display screen
function updateDisplay() {
    display.innerHTML = currentInput || '0';
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        // If it's a number or operator, add to the current input
        if (button.classList.contains('btn-num') || button.classList.contains('btn-operater')) {
            currentInput += buttonText;
        }
        
        // Handle backspace
        if (button.id === 'backspace') {
            currentInput = currentInput.slice(0, -1);
        }

        // Handle clear
        if (button.id === 'clear') {
            currentInput = '';
        }

        // Handle equal sign and calculate result
        if (button.id === 'equal') {
            try {
                // Calculate the result using eval and show it
                currentInput = eval(currentInput).toString();
            } catch (e) {
                // If there is an error, show error message
                currentInput = 'Error';
            }
        }

        updateDisplay();
    });
});

// Initial display
updateDisplay();


const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggler.classList.toggle('active');
});
