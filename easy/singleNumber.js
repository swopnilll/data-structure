/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // [4,1,2,1,2]
    let objCheck = {}
    //{4: 1, 1: 2, 2: 2}

    for(let i = 0; i < nums.length; i++){
        objCheck[nums[i]] = objCheck[nums[i]] ? objCheck[nums[i]] + 1 : 1;
    }


   for(const [key, value] of Object.entries(objCheck)){
        if(value === 1){
            return Number(key)
        }
   }

};