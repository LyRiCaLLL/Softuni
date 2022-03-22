function solve(input) {
    let fruit = input[0]
    let day = input[1];
    let broika = Number(input[2])
    let sum = 0.0
if(fruit === "banana" || fruit === "apple" || fruit === "orange" 
|| fruit === "grapefruit" || fruit === "kiwi" || fruit === "pineapple" 
|| fruit === "grapes"){

    if (day == "Monday" || day == "Tuesday" || day == "Friday") {
        switch (fruit) {
            case 'banana': sum = (broika * 2.50).toFixed(2); break;
            case 'apple': sum = (broika * 1.20).toFixed(2); break;
            case 'orange': sum = (broika * 0.85).toFixed(2); break;
            case 'grapefruit': sum = (broika * 1.45).toFixed(2); break;
            case 'kiwi': sum = (broika * 2.70).toFixed(2); break;
            case 'pineapple': sum = (broika * 5.50).toFixed(2); break;
            case 'grapes': sum = (broika * 3.85).toFixed(2); break;
            default: console.log("error");break;

        }
        console.log(sum);




    } else if (day == "Wednesday" || day == "Thursday") {
        switch (fruit) {
            case 'banana': sum = (broika * 2.50).toFixed(2); break;
            case 'apple': sum = (broika * 1.20).toFixed(2); break;
            case 'orange': sum = (broika * 0.85).toFixed(2); break;
            case 'grapefruit': sum = (broika * 1.45).toFixed(2); break;
            case 'kiwi': sum = (broika * 2.70).toFixed(2); break;
            case 'pineapple': sum = (broika * 5.50).toFixed(2); break;
            case 'grapes': sum = (broika * 3.85).toFixed(2); break;
            default: console.log("error");break;
               
        }
        console.log(sum);
        


    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case 'banana': sum = (broika * 2.70).toFixed(2); break;
            case 'apple': sum = (broika * 1.25).toFixed(2); break;
            case 'orange': sum = (broika * 0.90).toFixed(2); break;
            case 'grapefruit': sum = (broika * 1.60).toFixed(2); break;
            case 'kiwi': sum = (broika * 3.00).toFixed(2); break;
            case 'pineapple': sum = (broika * 5.60).toFixed(2); break;
            case 'grapes': sum = (broika * 4.20).toFixed(2); break;
            default: console.log("error");break;
                
        }
        console.log(sum);
        
    } else {
        console.log("error");
    }
}else{
    console.log("error");
}
    
}
solve(["apple",
    "Tuesdaya",
    "1"])

