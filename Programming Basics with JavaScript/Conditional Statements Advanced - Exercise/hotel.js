function hotelroom(input){
    let month = input[0]
    let nights = Number(input[1])
    let price;
    let price2;
 
    // studio
    if(month == "May" || month == "October" && nights > 7){
        price = 50 
    }
    else if(month == "June" || month == "September" ){
        price = 75.20
    }
    else if(month == "July" || month == "August" ){
        price = 76
    }
 
    // apartment
    if(month == "May" || month == "October" ){
        price2 = 65
    }
    else if(month == "June" || month == "September" ){
        price2 = 68.70
    }
    else if(month == "July" || month == "August" ){
        price2 = 77
    }
 
    if(nights > 7 && nights <=14 && (month == "May" || month == "October")){
        price = price * 0.95
    }
    else if(nights > 14 && (month == "May" || month == "October")){
        price = price * 0.70
    }
    else if(nights > 14 && (month == "June" || month == "September")){
        price = price * 0.80
    }
 
    if(nights > 14){
        price2 = price2 * 0.90
    }
 
    let price3 = price * nights
    let price4 = price2 * nights
 
    console.log(`Apartment: ${price4.toFixed(2)} lv.`)
    console.log(`Studio: ${price3.toFixed(2)} lv.`)
 
}
hotelroom(["October",
"15"])