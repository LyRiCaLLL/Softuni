function bookds(input) {
    let index = 0;
    let bookname = input[index];
    index++;
    let surchetbook = input[index]
    let surch = 0

    while (bookname !== surchetbook) {
        surchetbook= input[index]

        if (surchetbook === "No More Books") {
            console.log("The book you search is not here!");
            
            break;

        } else if (bookname !== surchetbook) {
            surch++;
            index++;
        }
    }
    if (surchetbook === bookname) {
        console.log(`You checked ${surch} books and found it.`);
    } else {
        console.log(`You checked ${surch} books.`);


    }


}
bookds(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
