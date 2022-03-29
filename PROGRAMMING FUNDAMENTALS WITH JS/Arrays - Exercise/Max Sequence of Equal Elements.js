function solve(arr) {
    let newArray = [];
    let firstArray = [];
    for (let index = 0; index < arr.length; index++) {
        firstArray = [];
        for (let j = index; j < arr.length; j++) {
            if (arr[index] === arr[j]) {
                firstArray.push(arr[j])
            }else{
                break;
            }
            if(firstArray.length > newArray.length){
                newArray = firstArray
            }
        }
        
    }
    console.log(newArray.join(" "));
}solve([2, 1, 1, 2, 3, 3, 2, 2, 2,1])