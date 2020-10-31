const reverseString = function(text) {
    let result = '';
    for ( let i = text.length; i >= 0; i-- ) {
        result += text.charAt(i);
    }
    return result;
}

module.exports = reverseString
