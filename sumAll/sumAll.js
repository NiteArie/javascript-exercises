const sum = (from, to) => {
    let result = 0;
    for ( let i = from; i <= to; i++ ) {
        result += i;
    }
    return result;
}

const sumAll = function(from, to) {
    if (typeof from != "number" 
    || typeof to != "number" 
    || from < 0 
    || to < 0
    ) {
        return "ERROR";
    }

    if ( to > from ) {
        return sum(from, to);
    } else {
        return sum(to, from);
    }
}

module.exports = sumAll
