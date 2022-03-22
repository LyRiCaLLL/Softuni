function fishtank(input)
{
let duljina = Number(input[0]);
let shirochina = Number(input[1]);
let visochina = Number(input[2]);
let procenta = Number(input[3]);
let obem = duljina*shirochina*visochina;
let litri = obem * 0.001;
let zaetopros = procenta/100;
let nujnilitri = litri - (litri*zaetopros)
console.log(nujnilitri);
}
fishtank([85,75,47,17])