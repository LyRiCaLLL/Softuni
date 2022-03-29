function solve(a, b, simvol) {
    sum = 0
    switch (simvol) {
        case "multiply":
            sum = a * b
            break;
        case "divide":
            sum = a / b
            break;
        case "add":
            sum = a + b
            break;
        case "subtract":
            sum = a - b
            break;

    }
console.log(sum);
}