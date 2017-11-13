

// const total = arr => {
//     let empt = []
//     return arr.reduce((sum, num)) 


// }

// console.log(total([10, 0, 100, 1, -100, 20, 33]))


// const reduce  = arr => 
//     arr.reduce((min,num) => {
//         if (num < min ){

//         }
//     }

const max = (num1, num2) => {
    if (num1 > num2) {
        return num1
    }else {
     return num2
   }
}

const reduceMin = arr =>
    arr.reduce((min, num) => {
        console.log(`min: ${min}, num: ${num}`)
        return num < min ? num : min
    })