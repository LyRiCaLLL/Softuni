function CleverLily(input) {
    let broi = Number(input[0]);
    let needmoney = Number(input[1]);
    let priceoftoy = Number(input[2]);
    let money = 10;
    let toy = 0;
    let saveMoney = 0;
    for (let i = 1; i <= broi; i++) {
        if (i % 2 !== 0) {
            toy++;

        } else {

            saveMoney += money;
            money += 10;
            saveMoney -= 1;
        }
    }
    saveMoney += toy * priceoftoy;
    let diff = Math.abs(saveMoney - needmoney)
    if (saveMoney >= needmoney) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}
CleverLily(["21",
    "1570.98",
    "3"])
