// Add your functions here
var numbers = [-65, -44, -12, -4];

function map(sourceArray, fn){
    let array = [];

    for (const elem of sourceArray) {
        let result = fn(elem);
        array.push(result);
    };

    return array;
};

function reduce(sourceArray, fn, start){
    let r = (!!start) ? start : sourceArray[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < sourceArray.length; i++) {
      r = fn(sourceArray[i], r)
    }
  
    return r;
}

 console.log(map(numbers, function(a){
     return -1 * a } ))