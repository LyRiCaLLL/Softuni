function solve(random){
    let type= typeof random
    if(type == "number"){
        console.log("Number");
        console.log(random);
    }else if(type == "string"){
        console.log("String");
        console.log(random);
    }else{
        console.log("Object");
        console.log("Parameter is not suitable for printing");

    }
    
}solve('Hello, JavaScript!')