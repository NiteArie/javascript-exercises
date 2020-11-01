const fibonacci = function(number) {
    if ( number < -1) {
        return "OOPS";
    }
    if ( number <= 1) {
        return Number(number);
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

module.exports = fibonacci
