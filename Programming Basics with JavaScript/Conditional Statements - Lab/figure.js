function figure(input)
{
    let name = (input[0]);
    let number = Number(input[1]);
    let neshtosi = Number(input[2]);
    if (name === "square")
    {
        console.log(number* number);
    }
    else if ( name === "rectangle")
    {
    console.log(number*neshtosi);
    }
    else if (name === "circle")
    {
        let sum = number *number * Math.PI;
        console.log(sum);
    }
    else if ( name === "triangle")
    {
        let sum = (number * neshtosi)/2;
        console.log(sum);
    }
}

figure(["circle",4.5,20])