function solve(n,arr) {

    let rev = [];
    
    for (let i = 0; i < n; i++) {
       rev.push(arr[i]);
   
    }
   let str = rev.reverse().join(" ")
    
    console.log(str);
    
}solve(3, [10, 20, 30, 40, 50])