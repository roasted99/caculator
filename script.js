const numberButtons = document.querySelectorAll('[data-type="number"]');
const operationButtons = document.querySelectorAll('[data-type="operator"]');
const equalsButton = document.querySelector('[data-type=equal]')
const deleteButton = document.querySelector('[data-type=delete]')
const allClearButton = document.querySelector('.clear')
const display = document.querySelector('.output')
const displayValue = display.textContent

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        const numValue = e.target.textContent;
        appendNumber(numValue);
    })
})

operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', e => {
        operation = e.target.textContent
        chooseOperator(operation)
    })
})

allClearButton.addEventListener('click', clearOperator)

equalsButton.addEventListener('click', () => {
    display.textContent = compute()

})

deleteButton.addEventListener('click', () => {
    display.textContent = display.textContent.toString().slice(0, -1)
})

function appendNumber(numValue) {
    
    const displayValue = display.textContent
    
    if (displayValue === '0') {
        display.textContent = numValue
    } else {
        display.textContent = displayValue + numValue
    }
    reset()
    currentOperand = display.textContent
    if (displayValue === '.' && display.textContent.includes('.')) return
}

function reset(){
    //display.textContent = ''
    currentOperand = ''
}

function chooseOperator(operation) {
    if (currentOperand === '') return
    currentOperation = operation
    //currentOperand = display.textContent
    prevOperand = currentOperand

    if (prevOperand !== '') compute()
    currentOperand = ''
    // console.log(currentOperation)
     console.log(prevOperand)
    //console.log(currentOperand)
}

function evaluate(){
    if (currentOperand === '') return
    //prevOperand = currentOperand
    currentOperation = operation
   // currentOperand = ''
    currentOperand = compute()
   // console.log(prevOperand)
   // console.log(current)
}

function compute() {
    let computation
    current = parseFloat(currentOperand)
    prev = parseFloat(prevOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (currentOperation) {
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
    currentOperand = ''
    prevOperand = ''
    currentOperation = undefined
}