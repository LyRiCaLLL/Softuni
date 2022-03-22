function demo(input) {
    let index = 0;
    let needmoney = Number(input[index])
    index++

    let pricheska = input[index]
    index++

    let chovek = input[index]
    index++
    let price = 0
    while (pricheska !== 'closed') {
    
    if( price >= needmoney){
        break;
    }
        switch (pricheska) {
            case "haircut":
                if (chovek === "mens") {
                    price += 15
                } else if (chovek === "ladies") {
                    price += 20
                } else if (chovek === "kids") {
                    price += 10

                }

                ; break;
            case "color":
                if (chovek === "touch up") {
                    price += 20
                } else if (chovek === "full color") {
                    price += 30
                }
                ; break;
            }
        pricheska = input[index]
        index++
        chovek = input[index]
        index++
    }
    diff = Math.ceil(needmoney - price)
    if (needmoney > price){
    console.log(`Target not reached! You need ${diff}lv. more.`);
console.log(`Earned money: ${price}lv.`);
} else {
console.log("You have reached your target for the day!");
console.log(`Earned money: ${price}lv.`);
}

}demo(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])

