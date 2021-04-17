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
  return buildBST(nums, 0, nums.length - 1); 
}

function buildBST(nums:number[], start:number, end:number) {
  if (start > end) { // 构成不了区间
    return null
  }
  const minIndex = Math.floor((start + end) / 2)  
  const root = new TreeNode(nums[minIndex]);

  root.left = buildBST(nums, start, minIndex - 1); // 构建左子树 
  root.right = buildBST(nums, minIndex + 1, end); // 构建左子树 
  return root;
}


// @lc code=end
