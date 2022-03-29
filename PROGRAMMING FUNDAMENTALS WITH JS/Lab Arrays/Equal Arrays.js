function solve(arr1, arr2) {

    let sum = 0
    let chek = true
    for (const arra of arr1) {
        sum += Number(arra)
        
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            chek = false
            break
        }
      
    }
    
    if (chek) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

} solve(['10', '20', '30'], ['10', '20', '30'])
solve(['1','2','3','4','5'], ['1','2','4','4','5'])