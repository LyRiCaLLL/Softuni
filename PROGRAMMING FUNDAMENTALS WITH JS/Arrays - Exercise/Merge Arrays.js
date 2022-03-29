function solve(arr1, arr2) {

let myarr=[]
    for (let index = 0; index < arr1.length ; index++) {
       
            if (index % 2 === 0) {
                myarr.push(Number(arr1[index]) + Number(arr2[index]));
                
            }else{
                myarr.push(`${arr1[index]}${arr2[index]}`)
            }

            

    }
    console.log(myarr.join(" - "));

}solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)