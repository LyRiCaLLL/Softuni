function demo (input) {
let procesor = Number(input[0]);
let videokarta = Number(input[1]);
let ram = Number(input[2]);
let broiRam = Number(input[3]);
let otstupka = Number(input[4]);
let sumRam = ram * broiRam;
let sumProc = procesor - (procesor * otstupka)
let sumVid = videokarta - (videokarta * otstupka)
let sum = sumRam+sumProc+sumVid;
sum *=1.57


console.log(`Money needed - ${sum.toFixed(2)} leva.`);



}demo(["500",
"200",
"80",
"2",
"0.05"])
