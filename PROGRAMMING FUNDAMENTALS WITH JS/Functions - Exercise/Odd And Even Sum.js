function oddAndEvenSum(number){
    let nuberAsText = number.toString();
    function odd(num) {
        let oddsum = 0
        let evenSum = 0
        for (let i = 0 ; i < num.length; i++) {
            let curNum = Number(num[i])
            if (curNum %2 !== 0) {
               
                
                oddsum += curNum
               
            }
            
        }
        return oddsum
      
    }
    function even(num) {
        
        let evenSum = 0
        for (let i = 0 ; i < num.length; i++) {
            let curNum = Number(num[i])
            if (curNum %2 == 0) {
               
                evenSum += curNum 
               
            }
            
        }
        return evenSum 
      
    }
    console.log( `Odd sum = ${odd(nuberAsText)}, Even sum = ${even(nuberAsText)}` );
}oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)