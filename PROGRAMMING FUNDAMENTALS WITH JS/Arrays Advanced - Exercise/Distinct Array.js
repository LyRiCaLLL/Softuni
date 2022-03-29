function solve (array){
let arr = []
for (const number of array) {
    if(!arr.includes(number)){
        arr.push(number)

    }
}
console.log(arr.join(" "));
}solve([7, 8, 9, 7, 2, 3, 4, 1, 2])
