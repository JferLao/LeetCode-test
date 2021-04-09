/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // 动态规划
  if (nums.length === 0) return 0
  let max: number = nums[0]
  for(let i = 1 ;i<nums.length;i++){
    nums[i]=Math.max(nums[i],nums[i]+nums[i-1])
  }
  return Math.max(...nums)
}
// @lc code=end

function maxSubArray_(nums: number[]): number {
  //贪心算法
  if (nums.length === 0) return 0
  let max: number = nums[0]
  //之前的和
  let sum: number = nums[0]
  for (let i = 1; i < nums.length; i++) {
    //之前的和小于 0 则抛弃选用当前值
    if (sum < 0) {
      sum = nums[i]
    } else {
      sum += nums[i]
    }
    max = Math.max(sum, max)
  }
  return max
}

export default maxSubArray
