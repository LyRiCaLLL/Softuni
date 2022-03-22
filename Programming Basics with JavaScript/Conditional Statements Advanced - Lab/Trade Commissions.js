function trade(input) {
    let grad = input[0];
    let sell = Number(input[1]);
    if (grad === "Plovdiv" || grad === "Varna" || grad === "Sofia") {
        if (0 < sell && sell <= 500) {
            switch (grad) {
                case "Sofia": sum = sell * (5 / 100); break;
                case "Varna": sum = sell * (4.5 / 100); break;
                case "Plovdiv": sum = sell * (5.5 / 100); break;
                default: console.log("error");
            }
            console.log(sum.toFixed(2))
        } else if (500 <= sell && sell <= 1000) {
            switch (grad) {
                case "Sofia": sum = sell * (7 / 100); break;
                case "Varna": sum = sell * (7.5 / 100); break;
                case "Plovdiv": sum = sell * (8 / 100); break;
                default: console.log("error");

            }
            console.log(sum.toFixed(2))
        } else if (1000 <= sell && sell <= 10000) {
            switch (grad) {
                case "Sofia": sum = sell * (8 / 100); break;
                case "Varna": sum = sell * (10 / 100); break;
                case "Plovdiv": sum = sell * (12 / 100); break;
                default: console.log("error");
            }
            console.log(sum.toFixed(2))
        } else if (sell > 10000) {
            switch (grad) {
                case "Sofia": sum = sell * (12 / 100); break;
                case "Varna": sum = sell * (13 / 100); break;
                case "Plovdiv": sum = sell * (14.5 / 100); break;
                default: console.log("error");
            }
            console.log(sum.toFixed(2))
        } else {
            console.log("error");

        }
    } else {
        console.log("error");
    }

}
trade(["Plovdiv",
"1000"])

