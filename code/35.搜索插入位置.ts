/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  if (target > nums[right]) return right + 1
  if (target < nums[left]) return 0
  while (left <= right) {
    let mid = Math.round((left + right) / 2)
    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
// @lc code=end

function searchInsert_(nums: number[], target: number): number {
  let index = -1
  index = nums.indexOf(target)
  if (index === -1) {
    nums.push(target)
    nums.sort((a, b) => a - b)
    index = nums.indexOf(target)
  }
  return index
}

export default searchInsert
