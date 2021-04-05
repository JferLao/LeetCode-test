/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle) return i
    }
  }
  return -1
}
// @lc code=end

function strStr_(haystack: string, needle: string): number {
  let position = 0,
    right = 0
  while (position < haystack.length && right < needle.length) {
    if (haystack[position + right] === needle[right]) {
      right++
    } else {
      right = 0
      position++
    }
  }
  return right === needle.length ? position : -1
}

export default strStr
