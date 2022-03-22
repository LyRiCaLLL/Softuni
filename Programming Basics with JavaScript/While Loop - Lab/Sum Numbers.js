function numbers(input) {
    let index = 0;
    let sum =Number(input[index])
    index++;
    
    let suma = 0;
    while(suma < sum){
    let number = Number(input[index]);
    suma+= number;
    index++
    
    
    }
    console.log(suma);

}
numbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
