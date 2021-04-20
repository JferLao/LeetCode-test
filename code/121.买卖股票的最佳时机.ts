/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max: number = 0
  let minPrice = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > max) {
      max = prices[i] - minPrice
    }
  }

  return max
}
// @lc code=end

export default maxProfit
