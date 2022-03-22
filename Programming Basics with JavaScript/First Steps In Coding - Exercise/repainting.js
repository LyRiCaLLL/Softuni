function repainting(input)
{
let nailon =Number(input[0]);
let boq =Number(input[1]);
let razdelitel = Number(input[2]);
let chas = Number(input[3]);
let torbichka = 0.40 ;
let sumnailon = (nailon + 2)* 1.5 ;
let sumboq = (boq + boq* 10/100)* 14.50;
let sumrazdel = razdelitel*5.00;
let obshtasum = sumnailon+ sumboq+ sumrazdel + torbichka;
let maistor = (obshtasum * 30/100) * chas;
let krainasum = obshtasum + maistor;

console.log(krainasum);
}
repainting([10,11,4,8])