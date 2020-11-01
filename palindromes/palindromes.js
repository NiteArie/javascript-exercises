const palindromes = function(text) {
    let formatted = text.toLowerCase().replace(/[^A-Za-z]/g, "");
    return formatted == formatted.split("").reverse().join("");
}

module.exports = palindromes
