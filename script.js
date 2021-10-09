const numberButtons = document.querySelectorAll('[data-type="number"]');
const operationButtons = document.querySelectorAll('[data-type="operator"]');
const equalsButton = document.querySelector('[data-type=equal]')
const deleteButton = document.querySelector('[data-type=delete]')
const allClearButton = document.querySelector('.clear')
const display = document.querySelector('.output')
//const keys = document.querySelectorAll('button')

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        const numValue = e.target.dataset.key;
        appendNumber(numValue);
    })
})

function appendNumber(numValue){
    const displayValue = display.textContent
    if (displayValue === 0){
        display.textContent = numValue.toString()
    } else {
        display.textContent = displayValue + numValue.toString()
    }
    
}

operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', e => {
        e.target.dataset.state = 'selected'
        const operator = e.target.dataset.key
        //operator.state = 'selected'
       compute(prev, operator, current)
    })
})

allClearButton.addEventListener('click', e => {
    display.textContent = ''
    delete e.target.dataset
})

function chooseOperation(operation){

}

// function compute(prev, operator, current) {
//     let computation
//     prev = parseInt(previousNum);
//     current = parseInt(currentNum)
//     if (operator === 'add') return computation = prev + current;
//     if (operator === 'subtract') return computation = prev - current;
//     if (operator === 'multiply') return computation = prev * current;
//     if (operator === 'divide') return computation = prev / current;
//     if (operator === 'percentage') return computation = prev / 100;
//     currentNum = computation;
//     operator = undefined;
//     previousNum = ''
//}

// function updateDisplay(currentNum){
//     display.innerText = currentNum
// }



