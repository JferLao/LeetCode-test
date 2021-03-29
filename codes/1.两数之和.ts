/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let j: number = 0;
  for (let i = 0; i < nums.length; i++) {
    j = nums.slice(i + 1).findIndex((el) => el === target - nums[i]) + i + 1;
    if (i !== j) return [i, j];
  }
}
// @lc code=end
