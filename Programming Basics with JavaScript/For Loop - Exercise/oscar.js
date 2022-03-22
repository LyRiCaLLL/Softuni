function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
 
    let totalPoints = Number(input[index]);
    index++;
    let actors = Number(input[index]);
    index++;
 
    for (let i = 0; i < actors; i++) {
      let actor = input[index];
      index++;
      let testPoints = Number(input[index]);
      index++;
      totalPoints += (actor.length * testPoints) / 2;
 
      if (totalPoints > 1250.5) {
        break;
      }
    }
 
    if (totalPoints > 1250.5) {
      console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
      console.log(`Sorry, ${name} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
    }
}
 
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"
])