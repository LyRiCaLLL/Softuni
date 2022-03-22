function food(input)
{
    let pilemenu = 10.35;
    let ribamenu = 12.40;
    let vegamenu = 8.15;
    let broipilemenu = Number(input[0]);
    let broiribamenu = Number(input[1]);
    let broivegamenu = Number(input[2]);
    let cenapilemenu = broipilemenu * pilemenu;
    let cenaribamenu = broiribamenu * ribamenu;
    let cenavegamenu = broivegamenu * vegamenu;
    let cenaobshto = cenapilemenu+cenaribamenu+cenavegamenu;
    let cenadesert = cenaobshto * 20/100;
    let cenadostavka = 2.50
    let obshtacena = cenaobshto+ cenadesert+ cenadostavka;
    

    console.log(obshtacena);
}
food([2,4,3])