/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let result = ''
  let temp = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = temp
    sum += i >= 0 ? parseInt(a[i]) : 0
    sum += j >= 0 ? parseInt(b[j]) : 0
    //保存当前位结果
    result += sum % 2
    //保存进制位
    temp = Math.floor(sum / 2)
  }
  result += temp === 1 ? temp : ''
  return result.split('').reverse().join('')
}
// @lc code=end

export default addBinary
