const sum = (a: number, b: number): number => a + b;

function rest(total: number, numToRest: number): number {
    return total - numToRest;
}

const TwoSumAndOneRest
    = (
    total: number,
    fnRest: (a: number, b: number) => number,
    fnSum: (a: number, b: number) => number
): number => {
    return fnRest(total, 2) + fnSum(2, 2) + fnSum(2, 3);
}

console.log(TwoSumAndOneRest(0, rest, sum))


const anser = (fn: (a: number, b: number) => number): number => {
    return fn(1, 3)
}

console.log(anser(rest))

