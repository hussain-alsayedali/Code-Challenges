let nums = [1,2,3,4,5,4]
if(!nums){
    return []
  }
return nums.sort((a,b) => a-b) || []