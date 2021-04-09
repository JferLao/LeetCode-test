/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let sum = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] != ' ') {
            sum++
        } else if (sum > 0) {
            return sum;
        }
    }
    return sum;
};
// @lc code=end

export default lengthOfLastWord