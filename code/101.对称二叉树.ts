/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root);
}
function check(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  return check(p.left, q.right) && check(p.right, q.left) && p.val === q.val;
}
// @lc code=end
