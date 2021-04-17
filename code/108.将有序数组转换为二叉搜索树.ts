/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
// *
//  * Definition for a binary tree node.
// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val
//     this.left = left === undefined ? null : left
//     this.right = right === undefined ? null : right
//   }
// }

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null
  }

  const pos = Math.ceil((nums.length - 1) / 2)
  const node = new TreeNode(nums[pos])

  node.left = sortedArrayToBST(nums.slice(0, pos))
  node.right = sortedArrayToBST(nums.slice(pos + 1))

  return node
}
// @lc code=end
