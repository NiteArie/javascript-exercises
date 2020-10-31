const removeFromArray = function(array, ...value) {
    let result = []
    for ( let i = 0 ; i < array.length; i++ ) {
        if ( value.indexOf(array[i]) == -1) {
            result.push(array[i]);
        }
    }
    return result;
}

module.exports = removeFromArray
