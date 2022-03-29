function factorial(firstNum,secandNum) {
    function factorialCalc(number) {
        let result = 1;
        while(number !=1){
            result *= number;
            number -=1;

        }
        return result
    }
    let finalDivision =
    factorialCalc(firstNum)/ factorialCalc(secandNum);
    console.log(finalDivision.toFixed(2));
}
factorial (5,2)