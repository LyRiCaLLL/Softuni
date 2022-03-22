function While(input) {
    let totalSum = 0;
    let index = 0;
    let currentInput = input[index];
    while (currentInput !== "NoMoreMoney") {
        let inputAsNumbaer = Number(currentInput);
        if (inputAsNumbaer < 0) {
            console.log("Invalid operation!");
            break;
        }
        totalSum += inputAsNumbaer
        console.log(`Increase: ${inputAsNumbaer.toFixed(2)}`);
        index++;
        currentInput = input[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}