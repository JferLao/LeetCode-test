/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */
//笔记： 任何数和自己做疑惑运算结果为0
//      任何数和0做异或运算结果还是自己
//      异或运算满足交换律和结合律

// @lc code=start
function singleNumber(nums: number[]): number {
  let ans: number = 0
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i]
  }
  return ans!
}
// @lc code=end

export default singleNumber
