let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return;
    if (currentInput === '0' && number !== '.') currentInput = '';
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    firstOperand = currentInput;
    operator = op;
    currentInput = '';
}

function calculateResult() {
    if (currentInput === '' || firstOperand === '' || operator === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    display.innerText = result;
    currentInput = result.toString();
    operator = '';
    firstOperand = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}
