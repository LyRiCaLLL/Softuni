function solve(num1, oper, num2) {
    let sum = 0.0
    if (oper === "+") {
        sum = num1 + num2
        console.log(sum.toFixed(2));
    } else if (oper === "-") {
        sum = num1 - num2
        console.log(sum.toFixed(2));
    } else if (oper === "/") {
        sum = num1 / num2
        console.log(sum.toFixed(2));
    } else if (oper === "*") {
        sum = num1 * num2
        console.log(sum.toFixed(2));
    }

} solve(5,
    '+',
    10
)
solve(25.5,
    '-',
    3
)