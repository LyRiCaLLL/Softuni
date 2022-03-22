function kong(input) {
    let film = Number(input[0]);
    let statist = Number(input[1]);
    let obleklonaedin = Number(input[2]);
    let dekor = film * 0.10;
    let sumobleklo = statist * obleklonaedin;
    let sum = sumobleklo + dekor;
    let ostatak = 0;
    if (statist > 150) {
        let statisti = sumobleklo * 0.10;
        let sumstatisti = sumobleklo - statisti;
        let sumobshto = dekor + sumstatisti;
        ostatak = Math.abs(sumobshto - film);
        if (sumobshto > film) {
 
 
            console.log("Not enough money!");
            console.log(`Wingard needs ${ostatak.toFixed(2)} leva more.`);
        } else {
 
 
            console.log("Action!");
            console.log(`Wingard starts filming with ${ostatak.toFixed(2)} leva left.`);
        }
    } else {
        ostatak = Math.abs(sum - film);
        if (sum > film) {
 
            console.log("Not enough money!");
            console.log(`Wingard needs ${ostatak.toFixed(2)} leva more.`);
        } else {
 
            console.log("Action!");
            console.log(`Wingard starts filming with ${ostatak.toFixed(2)} leva left.`);
        }
    }
 
}
kong(["9587.88",
"222",
"55.68"])
