function solve(num) {
    function test1(number) {
        
    
    switch (number) {
        case 10:
            return(`${number}% [%.........]`);

            break;
        case 20:
            return(`${number}% [%%........]`);
            
            break;
        case 30:
            return(`${number}% [%%%.......]`);
            
            break;
        case 40:
            return(`${number}% [%%%%......]`);
            
            break;
        case 50:
            return(`${number}% [%%%%%.....]`);
            
            break;
        case 60:
            return(`${number}% [%%%%%%....]`);
            
            break;
        case 70:
            return(`${number}% [%%%%%%%...]`);
            
            break;
        case 80:
            return(`${number}% [%%%%%%%%..]`);
            
            break;
            case 90:
                return(`${number}% [%%%%%%%%%.]`);
                
                break;
                case 100:
                    return(`${number}%  Complete!`);
    
                    break;
    }
                }
    function test2(num) {
        switch (num) {
        
        case 10:
            return("Still loading...");
            break;
        case 20:
        
            return("Still loading...");
            break;
        case 30:
        
            return"Still loading...";
            break;
        case 40:
        
            return("Still loading...");
            break;
        case 50:
        
            return("Still loading...");
            break;
        case 60:
        
            return("Still loading...");
            break;
        case 70:
        
            return("Still loading...");
            break;
        case 80:
        
            return("Still loading...");
            break;
            case 90:
            
                return("Still loading...");
                break;
                case 100:
                                return("[%%%%%%%%%%]");
                    break;
    }
        
    }
    console.log(test1(num));
    console.log(test2(num));

}solve(30)