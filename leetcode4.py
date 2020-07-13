 

nums1 = [1,2]
nums2 = [3,4]
nums3 = []
x = 0
j = 0
length = 10
median = 0

while (1):
    if len(nums1) == 0:
        if len(nums2) == 0:
            break
        nums3.insert(0, nums2.pop())
        continue
    if len(nums2) == 0:
        nums3.insert(0, nums1.pop())
        continue
    compare1 = nums1.pop()
    compare2 = nums2.pop()
    if compare1 > compare2:
        nums3.insert(0,compare1)
        nums2.append(compare2)
    else:
        nums3.insert(0,compare2)
        nums1.append(compare1)

length = len(nums3)
print (length)
index = length / 2
print (index)
if length % 2 == 1:
    median = nums3[int(index)]
else:
    median = (nums3[int(index) - 1] + nums3[int(index)]) / 2
print (median)



        



       

    