const numberButtons = document.querySelectorAll('[data-type="number"]');
const operationButtons = document.querySelectorAll('[data-type="operator"]');
const equalsButton = document.querySelector('[data-type=equal]');
const deleteButton = document.querySelector('[data-type=delete]');
const allClearButton = document.querySelector('.clear');
const display = document.querySelector('.output');

let displayValue = display.textContent;
let currentOperand = '';
let prevOperand = '';
let currentOperation = '';

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => appendNumber(numberButton.textContent))
})

operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', e => {
        operation = e.target.textContent
        chooseOperator(operation)
    })
})

allClearButton.addEventListener('click', clearOperator)

equalsButton.addEventListener('click', evaluate)

deleteButton.addEventListener('click', () => {
    display.textContent = display.textContent.toString().slice(0, -1)
})

function appendNumber(number) {
    if (display.textContent = '0') {
        displayValue += number
    }
    display.textContent = displayValue
}


function chooseOperator(operation) {
    if (currentOperation !== '') evaluate()
    currentOperation = operation
    currentOperand = displayValue
    console.log(currentOperand)
    console.log(currentOperation)

}

function evaluate() {
    if (currentOperand === '') return
    prevOperand = displayValue
    console.log(prevOperand)

    display.textContent = compute(currentOperation, prevOperand, currentOperand)

    currentOperand = display.textContent
    currentOperation = undefined
    prevOperand = ''
    return display.textContent

}

function compute(operation, prev, current) {
    let computation
    current = parseFloat(currentOperand)
    prev = parseFloat(prevOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (operation) {
        case '+':
            computation = prev + current
            break;
        case '-':
            computation = prev - current
            break;
        case 'x':
            computation = prev * current
            break;
        case '÷':
            computation = prev / current
            break;
        case '%':
            computation = prev / 100
            break;
        default:
            return
    }
    return computation
}

function clearOperator() {
    display.textContent = '0'
    displayValue = ''
    currentOperand = ''
    prevOperand = ''
    currentOperation = undefined

}