const leapYears = function(year) {

if (year % 400 == 0){
    
    return true;

}
if (year % 100 == 0){
    return false;
}

if (year % 4 == 0){
    return true;

}
else {
    return false;
}

}
module.exports = leapYears;

//400 years = true
//100 years false
//4 years true