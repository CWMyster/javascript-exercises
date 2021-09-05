const sumAll = function(lowNum, highNum) {
    
    let tally = 0

    if(typeof lowNum != 'number'|| typeof highNum != 'number'|| lowNum < 0 || highNum < 0){
        return 'ERROR';
    }

    let actLow = lowNum;
    let actHigh = highNum;

    if (actLow > actHigh) {
        actLow = highNum;
        actHigh = lowNum;
        
    }
    else {
        actLow = lowNum;
        actHigh = highNum;
    }
    

    for (actLow; actLow <= actHigh; actLow++){
       tally += actLow;
    }
    
    return tally;
} 

module.exports = sumAll;

/* 
I need to take two numbers 

and + every number in 
between until i reach the 2nd number. 

Step 2 (iteration)

lowNumber + Lownumber + 1 + lowNumber + 2 ... + highNumber = myAnswer


*/