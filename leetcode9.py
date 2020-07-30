from math import ceil, log, floor


class Solution:
    def isPalindrome(self, x: int) -> bool:
        reversednum = 0
        tempnum = x
        if x < 0:
            return (False)
        while (x > 0.1):
            lastdigit = lastdigit = x % 10
            reversednum = reversednum + (lastdigit *
                                         (10**(ceil(log(x + 1, 10)) - 1)))
            x = floor(x / 10)
        if reversednum == tempnum:
            return (True)
        else:
            return (False)