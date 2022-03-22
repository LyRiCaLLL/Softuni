function moving(input) {
    let index = 0;
    let width = Number(input[index])
    index++
    let length = Number(input[index])
    index++
    let height = Number(input[index])
    index++
    let numberOfKashons = input[index];
    index++
    IsHaveVolume = true;
    

    let volume = width * height * length
    while (numberOfKashons !== "Done") {
        let pieces = Number(numberOfKashons)
        volume -= pieces;
        if (volume <= 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            IsHaveVolume = false
            break;
        }



        numberOfKashons = input[index];
        index++;
    }


if(IsHaveVolume){

    console.log(`${volume} Cubic meters left.`)
}


    
}
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])


// while(numberOfKashons !== "Done"){
 //   space -= numberOfKashons
  //  index++
  //  console.log(`${space} Cubic meters left.`)

  //  if(numberOfKashons <= volume){
 //       notEnough =- Math.abs(volume) 
  //      console.log(`No more free space! You need ${notEnough} Cubic meters more.`)
  //  } ;break;