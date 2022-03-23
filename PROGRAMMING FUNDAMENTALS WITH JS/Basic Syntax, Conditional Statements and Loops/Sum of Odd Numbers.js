function solve(num){
    let a = 0;
    let sum = 0;
    for(let i=1; i <= 100 ; i++){
        if( i % 2){
           
            a++
            sum +=i
            console.log(i)
            if(a === num){
                
                
                console.log(`Sum: ${sum}`);
                break;
            }
    
    }
  }
}
  solve(5)