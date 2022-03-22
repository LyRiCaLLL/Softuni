function number(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let op = input[2];
    let resolt = 0
    switch (op) {
        case"+":
            resolt = N1 + N2;
            if (resolt % 2 === 0) {
                console.log(`${N1} ${op} ${N2} = ${resolt} - even`);
            } else {
                console.log(`${N1} ${op} ${N2} = ${resolt} - odd`);
            }
            ; break;
        case "-":
            resolt = N1 - N2;
            if (resolt % 2 === 0) {
                console.log(`${N1} ${op} ${N2} = ${resolt} - even`);
            } else {
                console.log(`${N1} ${op} ${N2} = ${resolt} - odd`);
            }
            ; break;
        case "/":

            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                resolt = N1 / N2;
                console.log(`${N1} ${op} ${N2} = ${resolt.toFixed(2)}`);
            };
            ; break;
        case "*":
            resolt = N1 * N2;
            if (resolt % 2 === 0) {
                console.log(`${N1} ${op} ${N2} = ${resolt} - even`);
            } else {
                console.log(`${N1} ${op} ${N2} = ${resolt} - odd`);
            }
            ; break;
        case "%":
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`);
            } else {
                resolt = N1 % N2;
                console.log(`${N1} ${op} ${N2} = ${resolt}`);
            }
            ; break
    }
}
number(["112",
"0",
"+"])
