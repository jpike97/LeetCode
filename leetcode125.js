var isPalindrome = function(s) {
    
    let formattedString = s.replace(/[\W_]+/g," ").replace(/\s/g, '').toLowerCase();
    return checkPalindrome(formattedString);
};


isPalindrome('dsaracecarasd');


function checkPalindrome(formattedString) {
    for (let i = 0; i < formattedString.length / 2; i++) {
        console.log(formattedString[i]);
        console.log("last letter is " + formattedString[formattedString.length - 1 - i]);
        if (formattedString[i] != formattedString[formattedString.length - 1 - i]) {
            return false;
        }
    }
    console.log("palindrome");
    return true;
}