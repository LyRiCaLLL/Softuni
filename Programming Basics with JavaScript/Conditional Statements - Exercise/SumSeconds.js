function sumseconds(input) 
{
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);
let time = time1 + time2 + time3;
let minutes = Math.floor(time/60);
let seconds = time % 60;
if (seconds <10)
{
    console.log(`${minutes}:0${seconds}`);
}
else
{
    console.log(`${minutes}:${seconds}`);
}
    
}
sumseconds([35,45,44])