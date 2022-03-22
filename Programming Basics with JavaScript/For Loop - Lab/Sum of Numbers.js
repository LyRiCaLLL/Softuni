function solve(input){
    let num1 = input[0] ;
    let num2 = input[1];
    for (let i = 0 ; i < numbar.length ;i++){
       sum +=Number(numbar[i]);
    }
    console.log(`The sum of the digits is:${sum}`)
}
solve(["100", "200"])