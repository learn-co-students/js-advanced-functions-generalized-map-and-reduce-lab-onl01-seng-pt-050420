function map(arr, fn){
    let array = [];

    for (const elem of arr) {
        let result = fn(elem);
        array.push(result);
    };

    return array;
};

function reduce(arr, fn, start){
    let r = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < arr.length; i++) {
      r = fn(arr[i], r)
    }
  
    return r;
}