const addition = (num1, num2) => {
    return num1 + num2
};
console.log(addition(2, 6))

const subtract = (num1, num2) => {
    return num1 - num2
};
console.log(subtract(6, 2))

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(2, 6))

const division = (num1, num2) => {
    return num1/num2
}
console.log(division(6, 2))

const operate = (num1, num2) => {
    switch (operate){
    case addition:
        addition(num1, num2);
        break;
    case subtract:
        subtract(num1, num2);
        break;
    case multiply:
        multiply(num1, num2);
        break;
    case division:
        division(num1, num2);
        break;
    }
}
console.log(operate(2, 6)(addition()))