function food(input) {
    let puzel = 2.60;
    let kukla = 3;
    let meche= 4.10;
    let minion = 8.20;
    let kamion = 2;
    let eksurzia = Number(input[0]);
    let broipuz = Number(input[1]);
    let broikuk = Number(input[2]);
    let broimech = Number(input[3]);
    let broimin = Number(input[4]);
    let broikam = Number(input[5]);
    let sum = broipuz* puzel + broikuk* kukla+broimech*meche+broimin*minion+broikam*kamion;
    let broi = broipuz+broikuk+broimech+ broimin+ broikam;
    let broiprocent = sum* 0.25;
    if (broi >=50){
        let krainacena = sum-broiprocent;
        let naem = krainacena* 0.10;
        let pechalba = krainacena - naem;
        
        if(pechalba >= eksurzia ){
            let ostavat = (pechalba-eksurzia).toFixed(2);
            console.log(`Yes! ${ostavat} lv left.`)
        }else{
            let ostavat2 = (eksurzia - pechalba).toFixed(2);
            console.log(`Not enough money! ${ostavat2} lv needed.`);
        }

    }else{
        let naem = sum * 0.10;
        let pechalba = sum - naem;
        if(pechalba >= eksurzia ){
            let ostavat = (pechalba-eksurzia).toFixed(2);
            console.log(`Yes! ${ostavat} lv left.`)
        }else{
            let ostavat2 = (eksurzia- pechalba).toFixed(2);

            console.log(`Not enough money! ${ostavat2} lv needed.`);
        }
        }
    }
    food(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])
    
  
