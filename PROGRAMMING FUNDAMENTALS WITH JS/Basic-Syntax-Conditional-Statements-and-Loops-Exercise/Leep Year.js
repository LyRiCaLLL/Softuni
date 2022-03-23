function year(yearr){
    if(yearr %4 === 0 && yearr%100 !== 0 || yearr %400 === 0){
        console.log("yes");
    }else{
        console.log("no");
    }

}year(1900)