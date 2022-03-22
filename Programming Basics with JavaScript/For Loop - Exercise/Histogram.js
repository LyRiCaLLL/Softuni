function Histogram(input){
   let broi= Number(input[0])
let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
let a = 1
for(i =1 ; i <= broi ;i++){
let num = Number(input[i])
if(num < 200){
     p1++
} else if(num >=200 && num <=399){
     p2++;
} else if(num >=400 && num <=599){
   p3++;
} else if(num >=600 && num <=799){
   p4++;
}  else{
   p5++;
}

}
let a1= p1 / broi*100
let a2= p2 / broi*100
let a3= p3 / broi*100
let a4= p4 / broi*100
let a5= p5 / broi*100

console.log(`${a1.toFixed(2)}%`);
console.log(`${a2.toFixed(2)}%`);
console.log(`${a3.toFixed(2)}%`);
console.log(`${a4.toFixed(2)}%`);
console.log(`${a5.toFixed(2)}%`);


}
Histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])


