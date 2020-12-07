function map(sourceArray, fn){
    return sourceArray.map(fn)
}

function reduce(sourceArray, fn, initialValue){
    if (initialValue){

        return sourceArray.reduce(fn, initialValue)
    } else {
        return sourceArray.reduce(fn)
    }
    
}