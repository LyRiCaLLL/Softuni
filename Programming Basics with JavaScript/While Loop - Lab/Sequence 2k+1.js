function rolenumber(input) {
    let number = Number(input[0])
    sum = 1;
    console.log(sum);
    while (sum <= number) {
        sum = sum * 2
        sum++;
        if (sum > number) {
            break;
        }
        console.log(sum);
    }


} rolenumber(["8"])
