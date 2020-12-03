// Add your functions here

function map(arr, func) {
    const result = [];
    for (let item in arr){
        result[item] = func(arr[item])
    }
    return result;
}

function reduce(arr, func, start) {
    let result = start;
    if (result) {
        for (let item in arr) {
            result = func(arr[item], result);
        }
    } else {
        result = arr[0];
        for (let item = 1; item < arr.length; item++) {
            result = func(arr[item], result)
        }
    }
    return result;
}