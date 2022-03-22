function demo (input) {
    let furstNumber1 =Number(input[0])
    let furstNumber2 =Number(input[1])
    let furstNumber3 =Number(input[2])
    let furstNumber4 =Number(input[3])
    let first = 0
    let secand = 0
    

    for (let K = furstNumber1 ;K <= 8 ;K++ ){
        
        for (let L = furstNumber2 ;L <=9 ;L++ ){
            for (let M = furstNumber3 ;M <= 8 ;M++ ){
                for (let N = furstNumber4 ;N <= 9 ;N++ ){
                    
                        if (K %2 == 0 &&L  %2 !== 0 && M %2 == 0 &&N  %2 !== 0 ){
                            if (K+L === M+N){
                                console.log("Cannot change the same player.");
                            }else {
                                console.log(`${K}${L} - ${M}${N}`);
                            }
                            
                            
                            
                        
                            
                        }


                    }
                    
        
                }
            }
        }
    }

demo (["7",
"6",
"8",
"5"])
