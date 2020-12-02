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

function mapMultiplier(sourceArray) {
    return function(multiplier)
    {return sourceArray.map(source => {
        return source * multiplier
    })}
}

function mapToNegativize(sourceArray){
    // return mapMultiplier(sourceArray)(-1)
    let negativeArray= [];

    sourceArray.forEach(source => {
     negativeArray.push(source * -1)
     });
     return negativeArray;
}

console.log(numbers, mapToNegativize)