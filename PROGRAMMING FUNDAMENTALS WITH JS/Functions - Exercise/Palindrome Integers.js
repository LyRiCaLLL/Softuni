function palindromInteger(inputArr){
     let arrOfNums = inputArr
     function reverss(number) {
          let startnum = number
          let reversedNum = Number(startnum.toString().split("").reverse().join(""))
     return reversedNum
     }
     for (let index = 0; index < arrOfNums.length; index++) {
          let element = arrOfNums[index];
          if (element === reverss(element)) {
               console.log(true);
               
          }else{
               console.log(false);
          }
     }

}palindromInteger([123,323,421,121])




//  function reverss(number) {
//      let startnum = number
//      let reversedNum = Number(startnum.toString().split("").reverse().join(""))
// console.log(reversedNum);
// }