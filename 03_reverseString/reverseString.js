const reverseString = function(str) {
    let splitString = str.split("");
    let num = splitString.length;
    let reversedString = '';

    for (i = num-1; i>= 0 ; i--){
        reversedString += splitString[i]
    }

    return reversedString;
};

reverseString('hello');

module.exports = reverseString;
