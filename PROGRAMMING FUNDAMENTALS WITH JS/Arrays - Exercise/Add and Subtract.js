function solve(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let MyArr = arr;
  

    for (const arra of arr) {
        sum1 += Number(arra);
    }
    for (let index = 0; index < MyArr.length; index++) {
        MyArr[index] = arr[index];
       if (MyArr[index] % 2 === 0) {
        MyArr[index] += index
          
       }else{
        MyArr[index] -=  index
       }  
    }

    for (const arra2 of MyArr) {
        sum2 += Number(arra2);
    }
   
    
    console.log(MyArr);
    console.log(sum1);
    console.log(sum2);
    
    
}solve([5, 15, 23, 56, 35])