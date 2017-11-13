//Exercise 3

const forEachSum = (arr) =>{
    let sum = 0
    arr.forEach(num => sum += num  );
    return sum
}



console.log(forEachSum([1,2,3,4,4,5,6,7]))