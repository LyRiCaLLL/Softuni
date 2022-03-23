function getNumbers(base, increment) {
    let marableSum = 0;
    let lapis = 0;
    let gold = 0;
    if (base && increment > 0) {
        let totalStone = 0;
        let counter = 1;
        for (let i = base; i >= 1; i -= 2) {
            if (base > 2) {
                if (counter % 5 === 0) {
                    lapis += (base * 4 - 4) * increment;
                } else {
                    marableSum += (base * 4 - 4) * increment;
                }
                counter++;
                totalStone += (base - 2) * (base - 2) * increment;
            } else {
                gold += (base * base) * increment
            }
            base -= 2;
        }
        console.log(`Stone required: ${Math.ceil(totalStone)}`);
        console.log(`Marble required: ${Math.ceil(marableSum)}`);
        console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
        console.log(`Gold required: ${Math.ceil(gold)}`);
        console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
    }
}getNumbers (11,0.75)