function numberSurch(array,arrayForMan) {
    let numberToTakeFromArr = arrayForMan[0]
    let deleteNumFromArr=arrayForMan[1]
    let serchedNum = arrayForMan[2]
    let myNewArr = array.splice(0 ,numberToTakeFromArr)
    myNewArr = myNewArr.splice(deleteNumFromArr)
    let count = 0
    for (let index = 0; index < myNewArr.length; index++) {
        if(myNewArr[index] === serchedNum){
            count++
}
    }
    console.log(`Number ${serchedNum} occurs ${count} times.`);
}numberSurch([5, 2, 3, 4, 1, 6],
    [5, 2, 3])
