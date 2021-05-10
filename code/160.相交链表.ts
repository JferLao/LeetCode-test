/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 哈希表
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null
  let posA = headA
  let hashMap = new Map()
  while(posA){
    hashMap.set(posA,1)
    posA=posA.next
  }
  while(headB){
    if(hashMap.has(headB)){
      return headB
    }
    headB=headB.next
  }
}

//暴力法
// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   if (!headA || !headB) return null
//   let posA = headA
//   while (posA) {
//     let posB = headB
//     while (posB) {
//       if (posA === posB) {
//         return posA
//       }
//       posB = headB.next
//     }

//     posA = headA.next
//   }
// }

// @lc code=end
