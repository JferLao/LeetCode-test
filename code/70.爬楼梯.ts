/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  // 滚动数组
  if (n < 3) {
    return n
  }
  let dp1 = 1,
    dp2 = 2,
    dp: number = 0
  for (let i = 3; i <= n; i++) {
    dp = dp1 + dp2
    dp1 = dp2
    dp2 = dp
  }
  return dp
}
// @lc code=end

function climbStairs_(n: number): number {
  //动态规划，缓存结果避免重复
  let dp: number[] = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
export default climbStairs
