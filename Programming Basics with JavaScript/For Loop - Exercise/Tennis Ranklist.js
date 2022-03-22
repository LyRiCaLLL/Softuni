function TennisRanklist(input) {
    let index = 0;
    let count = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let point = 0;
    let wincounter = 0;

    for (let i = 0; i < count; i++) {
        let etap = input[index];
        index++;
        if (etap === "W") {
            wincounter++;
            point += 2000;
        } else if (etap === "F") {
            point += 1200;
        } else {
            point += 720;
        }
    }
    let totalpoint = startPoints + point;
    console.log(`Final points: ${totalpoint}`);
    let avgpoints = Math.floor(point / count);
    console.log(`Average points: ${avgpoints}`);
    let totalWin = wincounter / count * 100;
    console.log(`${totalWin.toFixed(2)}%`);

}