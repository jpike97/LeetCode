class Solution:
    def myAtoi(self, s: str):
        integers = ['0','1','2','3','4','5','6','7','8','9']
        num = []

        def parse(number):
            print (number)
            if len(number) == 0 or number[0] == '-' and len(number) == 1:
                return 0
            if number[0] == '+' and len(number) == 1:
                return 0
            if int(''.join(map(str,number))) > 2**31 - 1:
                return 2**31 - 1
            if int(''.join(map(str,number))) < -2**31:
                return -2**31
            return (int(''.join(map(str,number))))


        for x in s:
            if x == ' ' and len(num) == 0:
                continue
            elif x == '-' and len(num) == 0:
                num.append((x))
            elif x == '+' and len(num) == 0:
                num.append(x)
            elif x in integers:
                num.append(int(x))
            else:
                break

        return parse(num)    