function solve(input) {
    sum = 0
    let numbarAssString = input.toString();

    for(const char of numbarAssString){

        sum += Number(char);
 
    }
    console.log(sum);
    
}solve(245678)