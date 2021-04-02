/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs === null || strs.length === 0) {
    return ''
  }
  let prev = strs[0]
  for (let i = 1; i < strs.length; i++) {
    let j = 0
    for (; j < prev.length && j < strs[i].length; j++) {
      if (prev[j] !== strs[i][j]) {
        break
      }
    }
    prev = prev.substring(0, j)
    if (prev === '') return ''
  }
  return prev
}
// @lc code=end

export default longestCommonPrefix
