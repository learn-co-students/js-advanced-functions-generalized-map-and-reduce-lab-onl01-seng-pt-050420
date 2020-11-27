function map(arr, callback) {
    let newArray = []
    for (let i = 0; i < arr.length ; i++) {
        newArray.push(callback(arr[i]))
    }
    return newArray
}

function reduce(arr, callback, init = 0) {
    let agg = (!!init) ? init : arr[0]
    let i = (!!init) ? 0 : 1
    for (; i < arr.length; i++) {
        agg = callback(arr[i], agg)
    }
    return agg
} 