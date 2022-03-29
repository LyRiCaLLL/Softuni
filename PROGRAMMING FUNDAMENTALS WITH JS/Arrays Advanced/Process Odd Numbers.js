function solve(arr) {
    let newArr = []
    let count = 1
    for (let index = 1; index < arr.length; index++) {
        if (index === count){
            newArr.unshift(arr[index]* 2)
        count += 2
    }

    }
    
    console.log(newArr.join(" "));





} solve([10, 15, 20, 25])