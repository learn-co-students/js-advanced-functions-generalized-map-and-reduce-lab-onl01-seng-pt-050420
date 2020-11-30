// Add your functions here
function map(inputArray, callbackFn)
{
  let newArray = [];
  for(const element of inputArray)
  {
    newArray.push(callbackFn(element));
  }
  return newArray;
}

function reduce(inputArray, callbackFn, accumulator) 
{
  const keys = Object.keys(inputArray);
  let i = 1;

  if (accumulator) 
  {
    i = 0;
  } 
  else 
  {
    accumulator = inputArray[keys[0]];
  }

  for (i; i < keys.length; i++) 
  {
    accumulator = callbackFn(accumulator, inputArray[keys[i]]);
  }
  return accumulator;
}