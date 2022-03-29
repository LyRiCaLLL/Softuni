function solve (num){
    let arr = ["Monday", "Tuesday", "Wednesday", "Thursday",
     "Friday", "Saturday","Sunday"]
    if(num <= 1 || num <= 7){
        num--;
    
     console.log(arr[num]);
    }else{
        console.log("Invalid day!");
    }
    
}solve(11)
solve(6)
// solve(11)