const dub = num => {
    return num *2
}


const map = (arr , funct) => {
    return arr.map(val => funct(val))
}

console.log(map([1,2,3,4,5],dub))