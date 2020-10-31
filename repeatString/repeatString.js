const repeatString = function(text, count) {

    if ( count < 0) {
        return "ERROR";
    }
    let result = '';
    for ( let i = 0; i < count; i++ ) {
        result += text;
    }
    return result;
}

module.exports = repeatString
