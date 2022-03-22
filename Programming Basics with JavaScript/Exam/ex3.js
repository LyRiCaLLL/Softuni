function demo(input) {
    let tanciorki = Number(input[0])
    let points = Number(input[1])
    let sezon = input[2];
    let durjava = input[3];
    let sum = tanciorki * points
    switch (durjava) {
        case "Bulgaria":
            if (sezon === "summer") {
                sum = sum - (sum * 5 / 100);
                let blag = sum * 0.75;
                let diff = sum - blag;
                console.log(`Charity - ${blag.toFixed(2)}`);
                let razlik = diff / tanciorki;

                console.log(`Money per dancer - ${razlik.toFixed(2)}`);
            } else {
                sum = sum - (sum * 8 / 100);
                let blag = sum * 0.75;
                let diff = sum - blag;
                console.log(`Charity - ${blag.toFixed(2)}`);
                let razlik = diff / tanciorki;

                console.log(`Money per dancer - ${razlik.toFixed(2)}`);


            }
            ; break;
        case "Abroad":
            sum *= 1.50
            if (sezon === "summer") {
                sum = sum - (sum * 10 / 100);
                let blag = sum * 0.75;
                let diff = sum - blag;
                console.log(`Charity - ${blag.toFixed(2)}`);
                let razlik = diff / tanciorki;

                console.log(`Money per dancer - ${razlik.toFixed(2)}`);
            } else {
                sum = sum - (sum * 15 / 100);
                let blag = sum * 0.75;
                let diff = sum - blag;
                console.log(`Charity - ${blag.toFixed(2)}`);
                let razlik = diff / tanciorki;

                console.log(`Money per dancer - ${razlik.toFixed(2)}`);

            }
            ; break;
    }


}demo(["25",
"98",
"winter",
"Bulgaria"])
