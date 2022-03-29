function solve(array,num) {
    for (let index = 0; index < num; index++) {
        let currNum = array.shift();
        array.push(currNum)
    }
    console.log(array.join(" "));
}