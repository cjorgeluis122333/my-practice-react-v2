export const weightProcess = (iterations: number) => {
    for (let i = 0; i < iterations; i++) {
        console.log("Execution: " + i);
    }
    return `The ${iterations} was finish!`
}