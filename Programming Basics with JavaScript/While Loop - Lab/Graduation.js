function graduation(input) {
    let name = input[0];
    let counterClasses = 0;
    let badGrade = 0;
    let sum = 0;
    let index = 1;
    
 
    while(counterClasses < 12){
        
        let currentGrade = Number(input[index]);
 
        if(currentGrade >= 4.00){
            sum += currentGrade;
            counterClasses++;
        } else {
            badGrade++;
            counterClasses++;
            if(badGrade === 2) {
                counterClasses--;
                console.log(`${name} has been excluded at ${counterClasses} grade`);
                break;
            }
        }
        index++
        currentGrade = input[index];
    }
    if (counterClasses === 12) {
        sum /= 12;
        console.log(`${name} graduated. Average grade: ${sum.toFixed(2)}`);
    } 
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
