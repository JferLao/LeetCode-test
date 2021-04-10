/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 0) return 0
  return Math.floor(Math.sqrt(x))
}
// @lc code=end


// 二分查找
function mySqrt_(x: number): number {
  if (x < 2) return x
  let left = 0
  let right = Math.floor(x / 2)
  let mid
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2)
    if (mid * mid === x) {
      return mid
    } else if (mid * mid > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right
}

export default mySqrt
