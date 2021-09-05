const repeatString = function(string, num) {
    myString = ''
    if (num < 0) {
        return 'ERROR'
    }
    for (i = 0; i < num; i++){
        myString += string }
        return myString;

};

module.exports = repeatString;
