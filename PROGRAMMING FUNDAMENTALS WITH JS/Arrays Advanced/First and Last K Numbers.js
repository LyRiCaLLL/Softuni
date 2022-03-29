function solve(arr) {
    let get = arr.shift()

let a = arr.slice(0,get)
let b = arr.slice(-get)
console.log(a.join(" "));
console.log(b.join(" "));


} solve([2,
    7, 8, 9])
solve([3,
    6, 7, 8, 9])