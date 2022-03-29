function solve(arr) {
    
    let odd = 0
    let even = 0
    let sum = 0
    for (const arra of arr) {
        

        if (arra % 2 === 0) {
            odd += Number(arra)

        } else {
            even += Number(arra)
        }
    }
    console.log(sum = odd - even);

} solve(['3', '5', '7', '9'])