function demo (input) {
let dni = Number(input[0])
let hrana = Number(input[1]);
let elen1 = Number(input[2])
let elen2 =  Number(input[3]);
let elen3 = Number(input[4]);

elen1 *= dni;
elen2 *= dni;
elen3 *= dni;

let sum = elen1+ elen2 + elen3

if(sum <= hrana){
    let diff = hrana - sum
    
    console.log(`${Math.floor(diff)} kilos of food left.`);
}else{
    let diff = sum - hrana
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
}


}demo(["2",
"10",
"1",
"1",
"2"])
