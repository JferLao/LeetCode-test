/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel表列序号
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  let sum = 0
  for (var i = 0, l = columnTitle.length; i < l; i++) {
    sum *= 26
    sum += columnTitle.charCodeAt(i) - 64
  }
  return sum
}
// @lc code=end
