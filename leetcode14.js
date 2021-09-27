/**
 * @param {string[]} strs
 * @return {string}
 */

let strs = ["abab", "aba", ""];


var longestCommonPrefix = function(strs) {
    var shortestString = strs.reduce((a, b) => a.length <= b.length ? a : b);
    var shortestStringLength = shortestString.length;
    var longestPrefix = "";
    if (shortestStringLength === 0 || strs.length === 1) { 
        return shortestString;
    }
    for (i = 0; i < shortestStringLength; i++) { 
        var currentChar = strs[0][i];
        for (j = 0; j < strs.length; j++) { 
            if (strs[j][i] != currentChar) { 
                return longestPrefix;
            }
        }
        longestPrefix += currentChar;
        if (longestPrefix === strs[0]) { 
            return longestPrefix;
        }
    }
    return longestPrefix;
};

console.log("answer is " + longestCommonPrefix(strs));