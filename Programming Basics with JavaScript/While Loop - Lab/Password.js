function password(input) {
    let Username = input[0];
    let passwords = input[1];
    let data = input[2]
    let index = 3
    while (data !== passwords) {
        data = input[index]
        index++
    }
    console.log(`Welcome ${Username}!`);
} 
password(["Nakov","1234","Pass","1324","1234"])
