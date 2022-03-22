function shoping(input) {
    let budjet = Number(input[0]);
    let brvkarti = Number(input[1]);
    let broiproc = Number(input[2]);
    let broiram = Number(input[3]);
    let videokarta = 250;
    let sumvkart = brvkarti * videokarta;
    let proce = sumvkart *0.35;
    let sumproce = broiproc* proce;
    let ram = sumvkart * 0.10;
    let sumram = broiram* ram ;
    let obshto = sumvkart+ sumproce+sumram;
    if(brvkarti>broiproc){
        let obshtosotstupka= obshto- (obshto*0.15)
        if(budjet>=obshtosotstupka){
        let resto = budjet - obshtosotstupka
        console.log(`You have ${resto.toFixed(2)} leva left!`);
    }else{
        let duljite= obshtosotstupka - budjet
        console.log(`Not enough money! You need ${duljite.toFixed(2)} leva more!`);
    }

    }else {
        if(budjet>=obshto){
            let resto = budjet - obshto
            console.log(`You have ${resto.toFixed(2)} leva left!`);
        }else{
            let duljite= obshto - budjet
            console.log(`Not enough money! You need ${duljite.toFixed(2)} leva more!`);
        }
    }

    
}
shoping(["920.45",
"3",
"1",
"1"])

