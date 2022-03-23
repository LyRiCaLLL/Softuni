function triangle(input) {
    let index = 0
    let name = input[0]
    let pass = input[index++]
    
    let strSplit = pass.split("")
    let revStr = strSplit.reverse()
    let truepas = revStr.join("")
    let fall = 0 
    let chek = true;
    while(chek){
        pass = input[index++]
        
        if (pass === truepas) {
            console.log(`User ${name} logged in.`)
            chek = false
          }else if(fall >= 3){
            
              console.log(`User ${name} blocked!`);
              chek = false
             
            
            

        }else {
            fall++
            console.log("Incorrect password. Try again.")
        }

    }
}
triangle(['Acer','login','go','let me in','recA'])
