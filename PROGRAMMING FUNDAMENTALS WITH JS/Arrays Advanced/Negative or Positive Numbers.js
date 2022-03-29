function solve(arr) {

    function arra(arr) {
        let res = []
        for (const array of arr) {
            if (array < 0) {
                res.unshift(array)

            } else {
                res.push(array)
            }

        }
        return res
    }
    console.log(arra(arr).join(" \n "));

} solve(['7', '-2', '8', '9'])