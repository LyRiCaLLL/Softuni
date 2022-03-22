function basket(input)
{

        let trenzagod = Number(input[0]);
        let basketkecove = 40/100 ;
        let basketkip= 20/100 ;
        let baskettopka =4 ;
        let basketaks= 5;
        let cenazabasketkecove =trenzagod-trenzagod*basketkecove ;
    let cenazabasket = cenazabasketkecove - cenazabasketkecove*basketkip;
        let cenazanaskettop = cenazabasket / baskettopka;
        let cenaaksesoari = cenazanaskettop / basketaks;
        let obshtacena = trenzagod + cenazabasketkecove + cenazabasket + cenazanaskettop + cenaaksesoari ;
    
     
    console.log(obshtacena);
    }
    basket([365])


