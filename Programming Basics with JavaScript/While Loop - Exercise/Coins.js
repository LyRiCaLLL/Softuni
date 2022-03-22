function coins(input) {
    let money = Number(input[0])
    money = Math.floor(money * 100);
    let counte = 0;
    while (money > 0) {
        if (money >= 200) {
            counte++;
            money -= 200;
        } else if (money >= 100) {
            counte++;
            money -= 100;
        } else if (money >= 50) {
            counte++;
            money -= 50;
        } else if (money >= 20) {
            counte++;
            money -= 20;
        } else if (money >= 10) {
            counte++;
            money -= 10;
        } else if (money >= 5) {
            counte++;
            money -= 5;
        } else if (money >= 2) {
            counte++;
            money -= 2;
        } else {
            counte++;
            money--;
        }
    }
    console.log(counte);

}coins(["2"])