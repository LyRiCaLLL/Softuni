function solveTrain(train) {
    let passengers = train.shift().split(" ").map(Number);
    let maxCapacity = Number(train.shift())
    for (const command of train) {
        let curCommand = command.split(' ')
        if (curCommand[0] === "Add") {
            passengers.push(Number(curCommand[1]))

        } else {
            for (let index = 0; index < passengers.length; index++) {
                if (passengers[index] + Number(curCommand[0]) <= maxCapacity) {
                    passengers[index] += Number(curCommand[0])
                    break;
                }

            }
        }

    }
console.log(passengers.join(" "));


} solveTrain(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])