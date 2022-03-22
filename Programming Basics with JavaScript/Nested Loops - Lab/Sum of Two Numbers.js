function demo(input) {
    let startinterval = Number(input[0])
    let endinterval = Number(input[1])
    let goalNumber = Number(input[2])
    let combination = 0
    for ( let i = startinterval; i <= endinterval;i++){
        for (let j = startinterval ; j <= endinterval; j++) {
            combination++;
            if (i+j === goalNumber){
                console.log(`Combination N:${combination} (${i} + ${j} = ${goalNumber}) `);
            return;
            }
            
        }
    }
    console.log(`${combination} combinations - neither equals ${goalNumber}`);
        
    
}demo([])