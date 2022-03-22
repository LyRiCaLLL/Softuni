function depcalc(input)
{
let depsum = Number(input[0]);
let sroknnadep = Number(input[1]);
let godlihvaprocent = Number(input[2]);
let natrupanalih = depsum *godlihvaprocent / 100;
let izlihva = natrupanalih/12 ;
let obshta = depsum + sroknnadep * izlihva ;

console.log(obshta);
}
depcalc([200,3,5.7])