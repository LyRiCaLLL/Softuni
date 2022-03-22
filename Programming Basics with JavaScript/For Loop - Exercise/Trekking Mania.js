function solve(input) {
    let index = 0;
    let brgroup = (input[index]);
    index++;
    let sum = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 0; i < brgroup; i++) {
        let group = Number(input[index]);
        index++;

        if (group <= 5) {//musala
            sum += group;
            p1+=group
        } else if (group >= 6 && group <= 12) {//monblan
            sum += group;
            p2+=group
        } else if (group >= 13 && group <= 25) {//kiliman
            sum += group;
            p3+=group
        } else if (group >= 26 && group <= 40) {//k2
            sum += group;
            p4+=group
        } else {//everest
            sum += group;
            p5+=group
        }


    }
    let a1= p1 / sum*100
let a2= p2 / sum*100
let a3= p3 / sum*100
let a4= p4 / sum*100
let a5= p5 / sum*100

console.log(`${a1.toFixed(2)}%`);
console.log(`${a2.toFixed(2)}%`);
console.log(`${a3.toFixed(2)}%`);
console.log(`${a4.toFixed(2)}%`);
console.log(`${a5.toFixed(2)}%`);


    
}
solve(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])


