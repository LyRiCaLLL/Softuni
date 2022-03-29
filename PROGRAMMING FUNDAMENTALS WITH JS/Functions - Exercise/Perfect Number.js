function perfectNumber(number){
    
    function findItsDivisors (num){  //Намираме делителите на даденото число
        let dividors = []
        for (let i = 1; i < num; i++){
            if (num %[i] === 0){
                dividors.push(i)     // Присвояваме делителите към допълнителен масив
            }
        }
        return dividors
    }
    let arrOff = findItsDivisors(number)   // Запазваме масива във външен масив който ще използваме след това

    function sumItsDivisors (arr){      // Намираме сбора на делителите, чрез интерация на външният масив
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum += arr[i]
        }
        return sum
    }
    
    function isPerfect (num){           // Проверяваме дали числото е перфектно
        if (sumItsDivisors(arrOff) === num){
            return `We have a perfect number!`
        }else {
            return `It's not so perfect.`
        }
    }
    console.log(isPerfect(number))

}
perfectNumber()