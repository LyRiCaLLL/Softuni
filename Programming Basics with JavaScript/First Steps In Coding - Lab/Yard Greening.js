function yard(input)
{
    let kvm = Number(input[0]);
    let cqldvor = kvm * 7.61;
    let otstupka =0.18 * cqldvor ;
    let calc = cqldvor - otstupka ;
  
    console.log(`The final price is: ${calc} lv.`)
    console.log(`The discount is: ${otstupka} lv.`);
}
yard([])