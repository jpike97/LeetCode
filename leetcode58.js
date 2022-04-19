const lengthOfLastWord = function(s) {
    
    let lastWordLength = 0;
    let wordEntered = false;
    for (let i = s.length - 1; i > -1; i--) { 
       if (s[i] === ' ' && !wordEntered) { 
           continue;
       }
       else if (s[i] === ' ' && wordEntered) { 
            break;
       }
       wordEntered = true;
       lastWordLength += 1;
    }
    console.log(lastWordLength);
};


let testString = "luffy is still joyboy";
lengthOfLastWord(testString);