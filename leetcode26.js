

let array = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
    console.log("index is " + i);
    console.log("num at index is " + nums[i]);
    
        if (nums[i] == nums[i+1]) { 
            console.log("they are the same!");
            nums.splice(i+1, 1);
            i = i - 1;
        }
        console.log("array is " + nums);
     }
     console.log("finished");
     return nums
};

console.log(removeDuplicates(array));