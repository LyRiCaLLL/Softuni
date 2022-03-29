
function solve(products, price) {
    sum = 0;
    switch (products) {
        case "coffee":
            sum = 1.50 * price
            break;
        case "water":
            sum = 1.00 * price
            break;
        case "coke":
            sum = 1.40 * price
            break;
        case "snacks":
            sum = 2.00 * price
            break;
    }
    console.log(sum.toFixed(2));
}solve("water", 5)