// Given an integer array nums, find and return all unique triplets [nums[i], nums[j], nums[k]], where the indexes satisfy i
// the sum of the elements nums[i] + nums[j] + nums[k] == 0.


function threeSumBrute (nums) {

    let results = [];
    
    let seen = new Set();
    
    let triplets = [];
    
    let key = "";
    

for (let i = 0; i < nums.length - 2; i++) {
  
  for (let j = i + 1; j < nums.length - 1; j++) {
    
    for (let k = j + 1; k < nums.length; k++) {
      
      if(nums[i] + nums[j] + nums[k] === 0){
          triplets = [nums[i],nums[j],nums[k]].sort((a,b) => a - b);
          
          key = triplets.join(",");
          
          if(!seen.has(key)){
              results.push(triplets);
              
              seen.add(key)
          }
       
      }
      
    }
  }
}    
    

    return results;
};
