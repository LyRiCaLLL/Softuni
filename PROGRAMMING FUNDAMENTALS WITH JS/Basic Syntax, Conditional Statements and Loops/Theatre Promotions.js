function info(day,age){
 
  
    switch(day){
        case `Weekday`: 
        if(age >= 0 && age <= 18){
            console.log(`12$`);
        }else if(age <= 64 && age > 18){
            console.log(`18$`);
        }else if(age <= 122 && age > 64){
            console.log(`12$`);
        }else {
            console.log(`Error!`);
        }
        break;
        case `Weekend`: 
        if(age >= 0 && age <= 18){
            console.log(`15$`);
        }else if(age <= 64 && age > 18){
            console.log(`20$`);
        }else if(age <= 122 && age > 64){
            console.log(`15$`);
        }else {
            console.log(`Error!`);
        }
        break;
        case `Holiday`: 
        if(age >= 0 && age <= 18){
            console.log(`5$`);
        }else if(age <= 64 && age > 18){
            console.log(`12$`);
        }else if(age <= 122 && age > 64){
            console.log(`10$`);
        } else {
            console.log(`Error!`);
        }
        break;
    }
     
    }
    info(`Weekday`, 42)