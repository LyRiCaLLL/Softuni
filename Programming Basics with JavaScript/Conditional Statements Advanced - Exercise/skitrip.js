function skitrip(input){
    let nights = Number(input[0])
    let vid = input[1];
    let ocenka = input[2]
    nights--; 
    let sum = 0.00;
    switch(vid){
        case"room for one person":
        sum = nights * 18.00;
        ;break;
        case"apartment": 
        sum=nights * 25.00;
        if(nights< 10){
            sum=sum * 0.70;
        }else if(nights >= 10 && nights <=15){
            sum=sum * 0.65;
        }else if(nights > 15){
            sum=sum * 0.50;
        }
        ;break;
        case"president apartment":
        sum=nights * 35.00;
        if(nights< 10){
            sum=sum * 0.90;
        } else if(nights >= 10 && nights <=15){
            sum=sum * 0.85
        } else if(nights > 15){
            sum=sum * 0.80 ;
        }
        ;break;
    }if(ocenka === "positive"){
    sum=sum * 1.25;
    }else if (ocenka === "negative" ){
        sum = sum * 0.90
    }
    console.log(`${sum.toFixed(2)}`);

}
skitrip(["10",
"apartment",
"positive"])
