function map(array, callback) {
    let newArr = []
    for(const item of array) {
        newArr.push(callback(item))
    }
    return newArr;
}

function reduce(array, callback, start) {
    let startAmount = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
    for(; i < array.length; i++) {
        startAmount = callback(array[i], startAmount)

    }
    return startAmount;
}