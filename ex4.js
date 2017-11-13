// Even Numbers

const even = (arr) => {
    return arr.filter(num => num %2 === 0 );
}

console.log(even([1,2,3,4,5,6,7,8]))