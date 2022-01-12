
var removeElement = function(nums, val) {

    //iterate over the array
    //if the number is equal to val, remove it
    //how to remove?
    //splice prob
    for (var i = 0; i < nums.length; i++) { 

        if (nums[i] === val) { 
            nums.splice(i, 1);
            //step back to get multiple?
            i--;
        }
    }
    let nums.length;
    
};

let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val));