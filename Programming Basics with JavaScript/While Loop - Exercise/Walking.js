function walking(input) {
    let target = 10000;
    let index = 0;
    let comand = input[index]
    index++;
    let currentSteps = 0;
    while (comand !== "Going home") {
        let steps = Number(comand);
        currentSteps += steps;

        if (currentSteps >= target) {
            break;
        }

        comand = input[index]
        index++;
    }
    if (comand === "Going home") {
        let step = Number(input[index]);
        index++;
        currentSteps += step;
    }
    let diff = Math.abs(currentSteps - target);
    if (currentSteps >= target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }



}