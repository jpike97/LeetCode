let input = "MCMXCIV";

var totalNum = 0;
for (var i = 0; i < input.length; i++) { 
    let numberToAdd = 0;
    let char = input[i];
    let followingChar = input[i+1];

    if (char === 'I' && (followingChar === 'V' || followingChar === 'X')) { 
        numberToAdd = convertTwoCharToValue(input[i] + input[i+1]);
        i++;
    }
    else if (char === 'X' && (followingChar === 'L' || followingChar === 'C')) { 
        numberToAdd = convertTwoCharToValue(input[i] + input[i+1]);
        i++;
    }
    else if (char === 'C' && (followingChar === 'D' || followingChar === 'M')) { 
        numberToAdd = convertTwoCharToValue(input[i] + input[i+1]);
        i++;
    }
    else { 
        numberToAdd = convertSingleCharToValue(input[i]);
    }

    totalNum += numberToAdd;
}

console.log(totalNum);

function convertSingleCharToValue(char) { 
    switch(char) { 
        case 'I':
            return 1
        case 'V':
            return 5
        case 'X':
            return 10
        case 'L':
            return 50
        case 'C':
            return 100
        case 'D':
            return 500
        case 'M':
            return 1000
    }
}

function convertTwoCharToValue(twoChar) {
    return convertSingleCharToValue(twoChar[1]) - convertSingleCharToValue(twoChar[0]); 
}