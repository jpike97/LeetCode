

//TODO: binary search
var searchInsert = function(nums, target) {
    let lastNum;
    if (target > nums[nums.length - 1]) { 
        return nums.length;
    }
    if (target < nums[0]) { 
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        if (currentNumber === target || (target > lastNum && target < nums[i])) { 
            return i;
        }
        lastNum = nums[i];
    }
};


let testNums = [1,3, 5];
let testTarget = 2;

console.log(searchInsert(testNums, testTarget));