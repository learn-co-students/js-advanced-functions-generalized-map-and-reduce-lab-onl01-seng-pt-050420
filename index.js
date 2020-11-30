// Add your functions here
function map(arr, func) {
  let r = [];
  for (let i = 0; i < arr.length; i++ ) {
    let e = func(arr[i]);
    r.push(e);
  }
  return r
}

// function reduce(arr, func, startingPoint=0) {
//   let total = startingPoint;
//   for (let i = 0; i < arr.length; i++) {
//     total += func(arr[i], total)
//   }
//   return total
// }

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
