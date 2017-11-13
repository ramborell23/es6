


countOddsAndEvens = arr =>
    arr.reduce((acc, num) =>{
        console.log(`acc: ${acc}, num: ${num}`)
        if (num %2 === 0 ){
            acc.evens += 1
            return acc
        }else{
            acc.odds +=1
            return acc
        }
    }, {odds:0, evens:0})