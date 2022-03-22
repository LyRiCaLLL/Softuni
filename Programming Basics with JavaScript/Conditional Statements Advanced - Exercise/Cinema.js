function cinema(input){
let projekcia = input[0];
    let redove = Number(input[1]);
    let koloni = Number(input[2]);
    let income = 0;
    if (projekcia == "Premiere") {
        income = redove * koloni * 12.0;

    } else if ([projekcia] == "Normal") {
        income = redove * koloni * 7.50;

    } else if (projekcia == "Discount") {
        income = redove * koloni * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);
}