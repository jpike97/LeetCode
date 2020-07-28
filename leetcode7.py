import math

integer = 10
reversed_int = 0
negative = 0



if integer < 0:
    integer = integer * -1
    negative = 1
count = math.floor(math.log10(integer))

while integer >= 10:
    b = integer%(10)
    print(b)
    integer = int(integer/10)
    reversed_int = reversed_int + 10**count * b
    count -= 1

reversed_int = reversed_int + integer

if negative == 1:
    reversed_int = reversed_int * -1

print(integer)
print(reversed_int)