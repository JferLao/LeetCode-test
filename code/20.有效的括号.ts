/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])

  let len = s.length
  if (len % 2 !== 0) return false
  let stack = []
  for (let char of s) {
    if (map.has(char)) {
      if (!stack.length || stack[stack.length - 1] !== map.get(char)) {
        return false
      }
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  return !stack.length
}
// @lc code=end

export default isValid
