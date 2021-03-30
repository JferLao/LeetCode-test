/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  let num: number = 0
  while (x != 0) {
    num = num * 10 + (x % 10)
    x = (x - (x % 10)) / 10
  }
  if (num < -2147483648 || num > 2147483647) {
    return 0
  }
  return num
}
// @lc code=end

function reverse_(x: number): number {
  let str: String[] = x.toString().split('')
  let res: number | string = ''
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== '-') {
      res += str.pop()
    } else {
      res = '-' + res
    }
  }
  res = Number(res)
  if (res >= 2 ** 31 - 1 || res <= 2 ** 31 * -1) {
    res = 0
  }
  return res
}

export default reverse
