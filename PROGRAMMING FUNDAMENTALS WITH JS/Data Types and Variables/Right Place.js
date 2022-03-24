function solve(str,char,result){
let res=str.replace('_',char);
let output= res === result?"Mathed":"Not Matched";
console.log(output);
}solve('Str_ng', 'I', 'Strong')

// if(res === result){
//     console.log("Mather");
// }else{
//     console.log("Not Matched");  ---> let output= res === result?"Mathed":"Not Matched";
// }