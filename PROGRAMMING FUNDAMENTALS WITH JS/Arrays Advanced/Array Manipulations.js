function solve(arr) {
    let arrNew = arr.shift().split(' ').map(Number)

    for (let i = 0; i < arr.length; i++) {

        let premestvane = arr[i].split(' ')

        if (premestvane[0] === 'Add') {

            arrNew.push(premestvane[1])

        } else if (premestvane[0] === 'Remove') {

            arrNew = arrNew.filter(num => num !== Number(premestvane[1]))
            
        } else if (premestvane[0] === 'RemoveAt') {

            arrNew.splice(premestvane[1], 1)

        } else if (premestvane[0] === 'Insert') {

            arrNew.splice(premestvane[2], 0, premestvane[1])

        }

    }

    console.log(arrNew.join(' '));

}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])

