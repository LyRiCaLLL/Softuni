function solve(char1, char2) {
    let firstChar = char1.charCodeAt(0)
    let secandChar = char2.charCodeAt(0)
    let charInRange = []
    if (firstChar < secandChar) {
        for (let index = firstChar + 1; index < secandChar; index++) {
            charInRange.push(String.fromCharCode(index))

        }
    } else {
        for (let index = secandChar + 1; index < firstChar; index++) {
            charInRange.push(String.fromCharCode(index))
        }
    }
    console.log(charInRange.join(" "));
}solve('C',
'#')