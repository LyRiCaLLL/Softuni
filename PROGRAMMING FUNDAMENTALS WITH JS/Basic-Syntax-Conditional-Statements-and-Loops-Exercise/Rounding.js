function rounding(num, dec){
    if(dec <= 15 ){
       console.log(parseFloat(num.toFixed(dec))); }
    else{
     console.log(parseFloat(num.toFixed(15)));
    }
    }