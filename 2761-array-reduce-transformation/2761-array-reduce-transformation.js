/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init, arrLength = nums.length;
    for (let i = 0; i < arrLength; i++){
        val = fn(val, nums[i]);
    }
    return val;
};