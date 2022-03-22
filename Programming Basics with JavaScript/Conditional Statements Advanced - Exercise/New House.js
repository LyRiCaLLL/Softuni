function NewHouse(input) {
    let vid = input[0];
    let broi = input[1];
    let budjet = input[2];
    let sum = 0.0;

    switch (vid) {
        case "Roses": 
        sum =broi * 5.00 ;
        if (broi > 80 ){
             sum = sum * 0.90
             
        }
        break;

        case "Dahlias": 
        sum = broi * 3.80;
        if (broi > 90 ){
            sum = sum * 0.85;
        }break;

        case "Tulips":
            sum = broi * 2.80;
        if (broi > 80 ){
            sum = sum * 0.85;
        }break;

        case "Narcissus":
            sum = broi * 3.00;
        if (broi < 120 ){
            sum = sum * 1.15;
        }break;

        case "Gladiolus": 
           sum = broi * 2.50;
        if (broi < 80 ){
            sum = sum * 1.20;
        }break;
    }
    let diff= Math.abs(sum - budjet);
    if (budjet >= sum){
console.log(`Hey, you have a great garden with ${broi} ${vid} and ${diff.toFixed(2)} leva left.`);
    }else{
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);    
    }
}
NewHouse(["Gladiolus",
"64",
"160"])
