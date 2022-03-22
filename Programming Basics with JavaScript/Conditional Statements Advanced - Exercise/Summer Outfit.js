function summer(input) {
    let degrees = Number(input[0])
    let timeofday = input[1];
    let Outfit;
    let Shoes;
    if (degrees >= 10 && degrees <= 18) {
        if (timeofday == "Morning") {
           Outfit = "Sweatshirt";
            Shoes = "Sneakers";
        } else if (timeofday == "Afternoon" || timeofday == "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        }
    } else if (18 < degrees && degrees <= 24) {
        if (timeofday == "Morning" || timeofday == "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else if (timeofday == "Afternoon") {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        }
    } else if (degrees >= 25) {
        if (timeofday == "Morning" ) {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        } else if (timeofday == "Afternoon") {
            Outfit = "Swim Suit";
            Shoes = "Barefoot";

        } else if (timeofday == "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";

        }
    }
console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
}
summer(["16",
"Morning"])
