const reverseString = function(string) {
    const length = string.length
    let newString = ''
    for (i = 0; i < length ; i++) { //length five go 5 times
        newString += string[length - 1 - i] //take the position minus i, minus the correction for position 0 -4
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
