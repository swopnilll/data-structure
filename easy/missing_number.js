/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // [0,1]

    let sortedArray = nums.sort((a, b) => a - b);
    // [0,1,3]

    if(sortedArray[0] !== 0){
        return 0;
    }

    for (let i = 1; i < sortedArray.length; i++) {        
        if (sortedArray[i - 1] !== sortedArray[i] - 1) {
            return sortedArray[i - 1] + 1;
        }
    }


    return nums.length;
};

