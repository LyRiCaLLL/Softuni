function solve(input) {
    if (input < 3.00) {
        console.log(`Fail (2)`);
    }else if (input < 3.50) {
        console.log(`Poor (${input.toFixed(2)})`);
    }else if (input < 4.50) {
        console.log(`Good (${input.toFixed(2)})`);
    }else if (input < 5.50 ) {
        console.log(`Very good (${input.toFixed(2)})`);
    }else {
        console.log(`Excellent (${input.toFixed(2)})`);
    }
    
}solve(3.52)