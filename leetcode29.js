var divide = function(dividend, divisor) {
        let currentNum = 0;
    let count = 0;
    let negative = ((divisor < 0 && dividend > 0) || (divisor > 0  && dividend < 0));
	  divisor = divisor < 0 ? -divisor : divisor;
    dividend = dividend < 0 ? -dividend : dividend;
    while (1) {
    		currentNum += divisor;
        if (currentNum > dividend) { 
        			let result = negative ? -count : count;
               if (result > 2147483647) {
    							return 2147483647;
										 }
 								else if (result < -2147483647) { 
 							return -2147483647;
 									}
 							else { 
 									return result;}
        				}
        else { 
        count++;
        }
    }
};


//todo: reduce runtime lol