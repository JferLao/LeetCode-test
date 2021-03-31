/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  let num: number = 0
  for (let i = 0; i < s.length; i++) {
    const prev = getValue(s[i])
    const next = getValue(s[i + 1])
      if (prev < next) {
        num -= prev || 0
      } else {
        num += prev || 0
      }
    
  }

  return num
}

function getValue(s: string): number {
  let value: number = 0
  switch (s) {
    case 'I':
      value = 1
      break
    case 'V':
      value = 5
      break
    case 'X':
      value = 10
      break
    case 'L':
      value = 50
      break
    case 'C':
      value = 100
      break
    case 'D':
      value = 500
      break
    case 'M':
      value = 1000
      break
  }
  return value
}
// @lc code=end

export default romanToInt
