

const total = arr =>{
    return arr.reduce((sum , num) =>sum - num )
}

console.log(total([10, 0, 100, 1, -100, 20, 33]))