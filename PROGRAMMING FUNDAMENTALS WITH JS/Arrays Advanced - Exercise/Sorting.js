function sort(array) {

    array = array.sort((a,b)=>b - a);
    
    let arr = []
    
    while (array.length > 0) {
        
        let bigNum = array.shift()
        
        arr.push(bigNum)
        
        let smallNum = array.pop()
        
        arr.push(smallNum)
        
    }
    
    console.log(arr.join(" "));
    
}sort([34, 2, 32, 45, 69, 6, 32, 7, 19, 47])

console.log("-----------------------------");

sort([1, 21, 3, 52, 690, 63, 31, 2, 18, 94])