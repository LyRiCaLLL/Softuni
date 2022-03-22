function demo(input){
    index = 0;
    dni = Number(input[index])
    index++;
    let litri = Number(input[index])
    index++
    let degris = Number(input[index])
    index++
let obshtolit = 0;
let obshtogradusi= 0
let sumgrad = 0

    for(let i = 1 ; i <= dni ; i++){
obshtolit += litri
obshtogradusi = litri * degris
sumgrad +=obshtogradusi




    litri = Number(input[index])
    index++
    degris = Number(input[index])
    index++
    }
    diffdegre = sumgrad / obshtolit
    console.log(`Liter: ${obshtolit.toFixed(2)}`);
    console.log(`Degrees: ${diffdegre.toFixed(2)}`);
    if(diffdegre < 38 ){
        console.log("Not good, you should baking!");
    }else if(diffdegre > 38 && diffdegre <42){
        console.log("Super!");
    }else{
        console.log("Dilution with distilled water!");
    }
}demo(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
