/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max: number = 0;
  for (let i = 1; i < prices.length; i++) {
    const temp = prices[i] - prices[i - 1];
    if (temp > 0) {
      max += temp;
    }
  }
  return max
}
// @lc code=end

export default maxProfit;
