function bomb(arr, bombR){

let bombRadios = bombR[1]
let bombStart = bombR[0]

let indexOfBombStart = arr.indexOf(bombStart);
while (indexOfBombStart !== -1) {
    let startExplose = Math.max(0 , indexOfBombStart - bombRadios)
    let endOfExplose = bombRadios * 2 + 1
arr.splice(startExplose,endOfExplose)


indexOfBombStart = arr.indexOf(bombStart)

}
let sumOfArr = arr.reduce(( a , b )=> a + b , 0) 

console.log(sumOfArr);
}bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])