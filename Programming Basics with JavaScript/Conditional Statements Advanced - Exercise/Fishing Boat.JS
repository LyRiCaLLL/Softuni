function Fishing(input) {
    let budjet = Number(input[0]);
    let sezon = input[1];
    let broirib = Number(input[2]);

    if (broirib % 2 == 0) {




        if (broirib <= 6) {
            switch (sezon) {//"Spring", "Summer", "Autumn", "Winter"
                case "Spring": //3000
                    otstupka = 3000- 3000 * 0.15;

                    ; break;
                case "Summer":
                    otstupka = 4200 - 4200 * 0.15;

                    ; break;// 4200
                case "Autumn":
                    otstupka = 4200 - 4200 * 0.10;

                    ; break;//4200
                case "Winter":
                    otstupka = 2600 -2600 * 0.15;

                    ; break;//2600
            }
        } else if (broirib <= 11) {
            switch (sezon) {//"Spring", "Summer", "Autumn", "Winter"
                case "Spring": //3000
                    otstupka = 3000- 3000 * 0.20;

                    ; break;
                case "Summer":
                    otstupka = 4200 - 4200 * 0.20;

                    ; break;// 4200
                case "Autumn":
                    otstupka = 4200 - 4200 * 0.15;

                    ; break;//4200
                case "Winter":
                    otstupka = 2600 -2600 * 0.20;

                    ; break;//2600
            }
        } else if (broirib >= 12) {
            switch (sezon) {//"Spring", "Summer", "Autumn", "Winter"
                case "Spring": //3000
                    otstupka = 3000- 3000 * 0.30;

                    ; break;
                case "Summer":
                    otstupka = 4200 - 4200 * 0.30;

                    ; break;// 4200
                case "Autumn":
                    otstupka = 4200 - 4200 * 0.25;

                    ; break;//4200
                case "Winter":
                    otstupka = 2600 -2600 * 0.30;

                    ; break;//2600
            }

        }
    } else {
        if (broirib <= 6) {
            switch (sezon) {//"Spring", "Summer", "Autumn", "Winter"
                case "Spring": //3000
                    otstupka = 3000- 3000 * 0.10;

                    ; break;
                case "Summer":
                    otstupka = 4200 - 4200 * 0.10;

                    ; break;// 4200
                case "Autumn":
                    otstupka = 4200 - 4200 * 0.10;

                    ; break;//4200
                case "Winter":
                    otstupka = 2600 -2600 * 0.10;

                    ; break;//2600
            }
        } else if (broirib <= 11) {
            switch (sezon) {//"Spring", "Summer", "Autumn", "Winter"
                case "Spring": //3000
                    otstupka = 3000- 3000* 0.15;

                    ; break;
                case "Summer":
                    otstupka = 4200 - 4200 * 0.15;

                    ; break;// 4200
                case "Autumn":
                    otstupka = 4200 - 4200 * 0.15;

                    ; break;//4200
                case "Winter":
                    otstupka = 2600 - 2600 * 0.15;

                    ; break;//2600
            }
        } else if (broirib >= 12) {
            switch (sezon) {//"Spring", "Summer", "Autumn", "Winter"
                case "Spring": //3000
                    otstupka = 3000- 3000 * 0.25;

                    ; break;
                case "Summer":
                    otstupka = 4200 - 4200 * 0.25;

                    ; break;// 4200
                case "Autumn":
                    otstupka = 4200 - 4200 * 0.25;

                    ; break;//4200
                case "Winter":
                    otstupka = 2600 -2600 * 0.25;

                    ; break;//2600
            }

        }
    }//%2
    sum = Math.abs(otstupka - budjet);
    if (budjet >= otstupka){
        console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
            }else{
            console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);    
            }
}
Fishing(["2000",
"Winter",
"13"])




