function vacation(group, type, day){
    let price;
    if(day === "Friday"){
        switch(type){
            case "Students":
                if(group >= 30){
                    price = (group * 8.45) * 0.85;
                } else {
                    price = group * 8.45;
                } break;
                case "Business":
            if(group >= 100){
                price = ((group - 10) * 10.9);
            } else {
                price = group * 10.9;
            } break;
            case "Regular":
            if(group >= 10 && group <= 20){
                price = (group * 15) * 0.95;
            } else {
                price = group * 15;
            } break;
        }
    }if(day === "Saturday"){
        switch(type){
            case "Students":
                if(group >= 30){
                    price = (group * 9.8) * 0.85;
                } else {
                    price = group * 9.8;
                } break;
            case "Business":
            if(group >= 100){
                price = ((group - 10) * 15.6);
            } else {
                price = group * 15.6;
            } break;
            case "Regular":
            if(group >= 10 && group <= 20){
                price = (group * 20) * 0.95;
            } else {
                price = group * 20;
            } break;
        }
    }if(day === "Sunday"){
        switch(type){
            case "Students":
                if(group >= 30){
                    price = (group * 10.46) * 0.85;
                } else {
                    price = group * 10.46;
                } break;
            case "Business":
            if(group >= 100){
                price = ((group - 10) * 16);
            } else {
                price = group * 16;
            } break;
            case "Regular":
            if(group >= 10 && group <= 20){
                price = (group * 22.5) * 0.95;
            } else {
                price = group * 22.5;
            } break;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}