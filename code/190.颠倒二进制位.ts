/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
  let str = String(n)
  let res = ''
  for (let i = str.length - 1; i >= 0; i++) {
    res += str[i]
  }
  return Number(res)
}
// @lc code=end
