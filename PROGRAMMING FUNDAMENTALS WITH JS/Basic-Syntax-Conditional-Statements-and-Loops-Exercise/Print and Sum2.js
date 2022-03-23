function printAndSum(start,end){
 
    let a = ""
    let sum = 0
 
    for(let i = start; i <= end; i+= 1){
        a = a + i +" " ;
        
 
        sum += i
       
    }
    console.log(a)
    console.log(`Sum: ${sum}`)

}printAndSum(5,10)
