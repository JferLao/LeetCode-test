/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number) {
  let j: number = 0
  for (let i = 0; i < nums.length; i++) {
    j = nums.slice(i + 1).findIndex((el) => el === target - nums[i]) + i + 1
    if (i !== j) return [i, j]
  }
}
// @lc code=end

// @lc code=start
function twoSum_(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
// @lc code=end

// @lc code=start
function twoSum__(nums: number[], target: number) {
  let result = new Map()
  for (let i = 0; i < nums.length; i++) {
    let current = target - nums[i]
    if (result.has(current)) {
      return [result.get(current), i]
    }
    result.set(nums[i], i)
  }
}
// @lc code=end
