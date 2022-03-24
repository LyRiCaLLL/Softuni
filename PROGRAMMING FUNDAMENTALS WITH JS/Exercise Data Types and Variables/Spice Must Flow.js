function solve(startingYield) {
    let SpiceExtracted= 0
    let dayCounter= 0
    while (startingYield>= 100){
        dayCounter++;
        SpiceExtracted += startingYield-26;
        startingYield -= 10
    }
    console.log(dayCounter);
    if (dayCounter != 0) {
        console.log(SpiceExtracted- 26);
    }else{
        console.log(SpiceExtracted);
    }
}