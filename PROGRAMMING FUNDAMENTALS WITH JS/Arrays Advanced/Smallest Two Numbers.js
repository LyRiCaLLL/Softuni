function solve(arr) {

  let sort =  arr.sort((a,b) => {return a - b;});

console.log(sort.slice(0,2).join(" "));
}solve([30, 15, 50, 5])