function school(input)
{
    let brhim = Number(input[0]);
    let brmark = Number(input[1]);
    let lit = Number(input[2]);
    let procent = Number(input[3]);
    let pakethim = brhim * 5.80 ;
    let pakmark = brmark * 7.20;
    let preparat =lit *1.20 ;
    let all = pakethim + pakmark + preparat;
    let procenta = procent / 100;
    let sumsnam = all - (all*procenta);

 
console.log(sumsnam)
}
school([2,3,4,25])
