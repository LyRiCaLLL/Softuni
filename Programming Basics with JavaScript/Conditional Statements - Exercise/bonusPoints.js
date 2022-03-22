function  bonusPoints(input) {
    let bonus = 0.0;
    let score = Number(input[0]);
    if (score <= 100){
        bonus =5;
    }else if (score >= 1000){
        bonus = score * 10/100.0 ; 
    }else {
        bonus = score * 20/100.0 ;
    }
    if (score % 2 == 0){
        bonus += 1;
    }else if (score % 10 == 5){
        bonus += 2;
    }
    console.log(bonus);
    console.log(score+ bonus);

    
}
bonusPoints([15875])