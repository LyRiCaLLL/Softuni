function solve(Centuries) {
    let years = Centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24*days;
    let minutes = 60 * hours;
    console.log(`${Centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}