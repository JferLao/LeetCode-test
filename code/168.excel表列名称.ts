/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  return columnNumber <= 26
    ? String.fromCharCode(columnNumber + 64)
    : convertToTitle(~~((columnNumber - 1) / 26)) +
        convertToTitle(columnNumber % 26 || 26)
}
// @lc code=end

export default convertToTitle
