export const transformOperator = (
    number1: number,
    number2: number,
    operator: string = "+"
): number => {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return number1 + number2;
    }
}