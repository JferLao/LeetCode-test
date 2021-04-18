/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  let rej: number[][] = []
  for (let i = 0; i < rowIndex + 1; i++) {
    const row = new Array(i + 1).fill(1)
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = rej[i - 1][j - 1] + rej[i - 1][j]
    }
    rej.push(row)
  }
  return rej[rej.length - 1]
}
// @lc code=end

export default getRow
