const screen = document.getElementById('screen');
let expression = '';
let resultDisplayed = false;

// Function to update the screen
const updateScreen = (content) => {
    screen.innerText = content;
};

// Event listener for all number and operator buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;

        // Preventing multiple operators being pressed in a row
        if (resultDisplayed && !isNaN(value)) {
            expression = value;  // Reset expression after result is displayed
            resultDisplayed = false;
        } else {
            const lastChar = expression.slice(-1);
            
            // Check if the last character is an operator
            if (isNaN(lastChar) && isNaN(value) && value !== '.') {
                // Prevent entering two operators in a row
                return;
            }

            expression += value;
        }
        
        updateScreen(expression || '0');  // Display expression or 0 if empty
    });
});

// Event listener for the equal button
document.getElementById('equal').addEventListener('click', () => {
    try {
        // Replace custom operators with valid ones for evaluation
        let sanitizedExpression = expression.replace('÷', '/').replace('×', '*');

        // Evaluate the expression
        let result = eval(sanitizedExpression);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        expression = result.toString();
        updateScreen(expression);
        resultDisplayed = true;  // Set flag to reset after displaying result
    } catch (error) {
        updateScreen('Error');
        expression = '';
    }
});

// Event listener for the clear button
document.getElementById('clear').addEventListener('click', () => {
    expression = '';
    updateScreen('0');
});

