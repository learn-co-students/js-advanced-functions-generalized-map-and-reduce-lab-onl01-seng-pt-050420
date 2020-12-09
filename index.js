// Add your functions here
const map = function(source, callback) {
  let result = [];
  for(let i = 0; i < source.length; i ++) {
    let element = source[i];
    result.push(callback(element));
  }
  return result;
}


const reduce = function(source, callback, startingPoint) {
  let result = (!!startingPoint) ? startingPoint : source[0];
  let i = (!!startingPoint) ? 0 : 1;
  
  for(; i < source.length; i++) {
    result = callback(source[i], result)
  }
  return result;
}