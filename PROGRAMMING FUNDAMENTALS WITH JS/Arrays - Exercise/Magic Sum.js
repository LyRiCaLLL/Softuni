function solve(arr, num) {
    let sum = 0
    for (let i = 0 ; i < arr.length ; i++) {
        for (let index = i+1; index < arr.length; index++) {
           sum =  Number(arr[i]) + Number(arr[index])
            if (sum === num) {
                console.log(arr[i],arr[index]);
                sum = 0 
            }
            
        }
        
    }
    
}solve([1, 7, 6, 2, 19, 23], 

    8 )