function swimm(input) {
    let rekord =Number(input[0]);
    let metri =Number (input[1]);
    let vreme =Number (input[2]);
    let razstoqnie= metri* vreme;
    let dobvreme =Math.floor(metri/15).toFixed(0) * 12.5;;
    let obshto = ((dobvreme)+ razstoqnie).toFixed(2);
    if (obshto < rekord){
        console.log(`Yes, he succeeded! The new world record is ${obshto} seconds.`);
    }else{
        let zamalko = (obshto - rekord).toFixed(2);
        console.log(`No, he failed! He was ${zamalko} seconds slower.`);
    }
    
}
swimm([55555.67,
    3017,
    5.03])
