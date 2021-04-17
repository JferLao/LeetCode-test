/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function getTreeHeight(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  return Math.max(getTreeHeight(root.left), getTreeHeight(root.right)) + 1
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true
  return (
    Math.abs(getTreeHeight(root.left) - getTreeHeight(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}
// @lc code=end
