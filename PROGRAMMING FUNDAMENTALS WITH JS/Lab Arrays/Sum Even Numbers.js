function solve(arr) {
    
   let sum = 0

   for (const arra of arr) {
       
   
        
        if(arra % 2===0){
            sum += Number(arra)
    }
    }
    console.log(sum);
    
    
}solve(['1','2','3','4','5','6'])