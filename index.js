// Add your functions here
const map = function(arr, func) {
    let newArr = []
    for (let i=0; i<arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}

const reduce = function(arr, func, startingPoint) {
    let value = startingPoint;
    for (let i=0; i<arr.length; i++) {
        if (!value) {
            value = arr[i]
        } else {
            value = func(arr[i], value)
        }
    }
    return value || false
}