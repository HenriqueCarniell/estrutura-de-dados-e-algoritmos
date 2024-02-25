var smallerNumbersThanCurrent = function(nums) {
    let result = [];

    for (var i = 0; i < nums.length; i++) {
        let count = 0;
        for (var j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count++;
            }
        }
        result.push(count);
    }

    return result;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
