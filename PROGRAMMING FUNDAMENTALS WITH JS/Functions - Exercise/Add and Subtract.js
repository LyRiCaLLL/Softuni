function sum (num1, num2, num3){
    function add(firstNum , secandNum) {
        return firstNum + secandNum
    }
    let solve = (addResult, thirdNumber) => addResult - thirdNumber;
   let firstsum = add(num1 , num2)
   let secandsum = solve(firstsum,num3)
   console.log(secandsum);
}sum(23,
    6,
    10)