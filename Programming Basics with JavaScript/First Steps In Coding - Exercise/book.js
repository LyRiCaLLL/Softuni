function book(input)
{
    let brstr = Number(input[0]);
    let stranici = Number(input[1]);
    let broidni = Number(input[2]);
let obvreme = brstr / stranici ;
let neobhodimichesove = obvreme/broidni ;
console.log(neobhodimichesove)

}
book([212,20,2])