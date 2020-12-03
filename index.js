const map = (arr, callback) => {
    return arr.map(arr => callback(arr))
}

// const reduce = (arr, callback, initVal = 0) => {
//     return arr.reduce(callback, initVal)
// }

function reduce(arr, cb, initVal = 0){
    return arr.reduce(cb, initVal)
}