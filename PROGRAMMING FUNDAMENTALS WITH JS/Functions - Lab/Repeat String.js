// function solve(str, num) {
//     let sum = ""
//     for (let i = 0; i < num; i++) {
//         sum += str
        
//     }
//     console.log(sum);
// }
// solve("abc", 3)
function solve(str,num) {
    let sum = ""
    for (let index = 0; index < num; index++) {
       sum += str
        
    }
    return sum;
}

solve("abc",3)
let result = solve("abc",3)
console.log(result);

