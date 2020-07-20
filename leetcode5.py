class Solution:    
    def longestPalindrome(self, s: str) -> str:
        string = s
        highest = ""
        for x in range(0, len(string)):
            for j in range(x+1, len(s) + 1):
                if checkPalindrome(string[x:j]) == 1 and len(string[x:j]) > len(highest):
                    highest = string[x:j]
        print(highest)
    
    
def checkPalindrome(string):
        x = 0
        while x < len(string) / 2:
            if string[x] != string[len(string) - (x + 1)]:
                return 0
            x += 1
        return 1



