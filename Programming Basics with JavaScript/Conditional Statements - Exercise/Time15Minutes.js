function TimeMinutes(input) {
        let hour = Number(input[0]);
        let minute = Number(input[1]);
       
        minute = minute + 15;
        if (minute > 59)
        {
            hour++;
            minute -= 60;
        }
         if (hour > 23)
        {
            hour = 0;
        }
         if (minute < 10)
        {
            console.log(`${hour}:0${minute}`);
    
        }
        else 
        {
            console.log(`${hour}:${minute}`);
        }
    }
    
    
   TimeMinutes([23,55])