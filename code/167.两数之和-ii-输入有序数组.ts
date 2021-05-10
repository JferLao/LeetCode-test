/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let map = new Map()
  for (let i = 0; i < numbers.length; i += 1) {
    let temp = target - numbers[i]
    if (map.has(temp)) {
      return [map.get(temp) + 1, i + 1]
    } else {
      map.set(numbers[i], i)
    }
  }
  return []
}
// @lc code=end

export default twoSum
