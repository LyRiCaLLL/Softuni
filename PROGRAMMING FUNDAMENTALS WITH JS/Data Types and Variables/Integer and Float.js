function solve(a, b, c) {
    let sum = a + b + c;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(`${sum}`);

} solve(9, 100, 1.1)