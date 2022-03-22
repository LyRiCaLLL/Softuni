function LunchBreak(input) {
    let name= (input[0]);
    let vremetrainos= Number(input[1]);
    let vremepochivka = Number(input[2]);
    let vremezaobqd = vremepochivka / 8 ;
    let vremeotdih= vremepochivka/4 ;
    let ostanalovreme = vremepochivka - vremezaobqd-vremeotdih;
    if (vremetrainos <= ostanalovreme){
    let vreme = ostanalovreme - vremetrainos;
    console.log(`You have enough time to watch ${name} and left with ${Math.ceil(vreme)} minutes free time.`);
    }else{
        let vreme = vremetrainos - ostanalovreme;
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(vreme)} more minutes.`);

    }
    
    
}
LunchBreak(["Game of Thrones",
"60",
"96"])
