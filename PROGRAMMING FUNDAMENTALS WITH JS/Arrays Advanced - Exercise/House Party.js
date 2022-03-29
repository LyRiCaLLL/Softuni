function party(arr) {
    let list = []
    for (const line of arr) {
        let tokens = line.split(" ");
        let name = tokens[0]
        if(tokens.length === 3){
            let isInClude = list.includes(name)
            if(isInClude){
                console.log(`${name} is already in the list`);
            }else{
                list.push(name)

            }
        }else {
            let indexPerson = list.indexOf(name)
            if(indexPerson !== -1){
                list.splice(indexPerson , 1)
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
        
    }
 console.log(list.join("\n"));   
}party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']) 

console.log("-----------------------------");
party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])