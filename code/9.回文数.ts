/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  return (x + '') === (x + '').split('').reverse().join('');
};
// @lc code=end


function isPalindrome_(x: number): boolean {
  if (x < 0) return false;
  const s = x.toString();
  let b = 0, e = s.length - 1;
  while (b < e) {
    if (s[b] !== s[e]) return false;
    ++b, --e;
  }
  return true;
}
export default isPalindrome
