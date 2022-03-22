function demo(input) {
    index = 0
    let destinaciq = (input[index]);
    index++;
    let needsum = Number(input[index]);
    index++
 
    while (destinaciq !== "End") {
 
        while (needsum > 0) {
    let sum = Number(input[index])
    index++;
   needsum-= sum;
   
    if(needsum <= 0){
        console.log(`Going to ${destinaciq}!`);
        destinaciq = input[index]
 
        index++
        needsum =Number(input[index])
        index++
 
 
    }
        }
    }
 
} demo(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])