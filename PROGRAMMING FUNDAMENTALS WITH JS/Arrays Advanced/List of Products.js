function solve(arr) {
    let i = 1
    let sort =  arr.sort()
for (const note of sort) {
    console.log(`${i++}.${note}`);
}

} solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])