function readtext(input){       //function readtext(input){
    let index= 0;               //    let index= 0;    
    let name = input[index];    //    let name = input[index]; 
    while(true){                //while(name !== 'Stop'){   
                                //         console.log(name);
        name = input[index];    //         name = input[index]; 
        index++;                //         index++;
        if(name === "Stop"){    // }   
            break;              //}
        }                       //
        console.log(name);      // 
    }                           // 
}                               //
readtext(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
