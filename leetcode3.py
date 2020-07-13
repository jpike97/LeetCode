highest = []
temp = []
lastChar = ''
s = 'bbacd'
index = 0
for x in s:
    print('x is ' + x)
    print('lastchar is ' + lastChar)
    print('temp is ')
    print(temp)
    if x != lastChar and x not in temp:
        temp.append(x)
        if len(temp) > len(highest):
            highest = temp
    else:
        print('step is')
        if lastChar != x:
            temp = temp[(temp.index(x)+1):index]
        else:
            temp = []
        temp.append(x)
        print('temp reset is: ')
        print(temp)
    lastChar = x
    index += 1
print (highest)