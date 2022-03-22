
function demo(input) {
    let index = 0;
    let lolscore = Number(input[index]);
    index++;
    let zadacha = input[index];
    index++;
    let ocenka = Number(input[index]);

    let slabaocenka = 0;
    let score = 0;
    let broizadachi = 0;
    let flag = true;

    while (zadacha !== "Enough") {
        ocenka = Number(input[index])
        index++;
        broizadachi++;
        score += ocenka;
        if (slabaocenka >= lolscore) {
            console.log(`You need a break, ${slabaocenka} poor grades.`);
            flag = false;
            break;
        }

        if (ocenka <= 4) {
            slabaocenka++;
        }

        zadacha = input[index];
        index++;
    }
    
    if (flag) {
        --index;
        --index;
        --index;
        zadacha = input[index];
        score = score / broizadachi;
        console.log(`Average score: ${score.toFixed(2)}`);
        console.log(`Number of problems: ${broizadachi}`);
        console.log(`Last problem: ${zadacha}`);

    }

} demo(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
