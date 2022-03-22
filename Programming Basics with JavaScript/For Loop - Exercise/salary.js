function Salary(input){
    let index=0;
    let broi= Number(input[index]);
    index++;
    let zaplata = Number(input[index]);
    index++;
let flag = true
 for(i =0 ; i <= broi ;i++){
 let saits = (input[index])
 index++;
switch(saits){
case "Facebook":zaplata-=150 ;break;
case "Instagram":zaplata-=100 ;break;
case "Reddit":zaplata-= 50 ;break;
}
if(zaplata<=0){
    flag = false
    console.log("You have lost your salary." );
    break;
}
}
if(flag){
    console.log(zaplata);
}
}
Salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
