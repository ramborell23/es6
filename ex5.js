
const funct = val => console.log(val)

const forEach = (arr, funct) => {
    arr.forEach(num => funct(num))
}

forEach([1,2,3,4,5],funct)