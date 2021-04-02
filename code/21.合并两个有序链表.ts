/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start

//  * Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const prev = new ListNode()
  let lastNode = prev
  while (!!l1 && !!l2) {
    if (l1.val < l2.val) {
      lastNode.next = l1
      l1 = l1.next
    } else {
      lastNode.next = l2
      l2 = l2.next
    }
    lastNode = lastNode.next
  }
  lastNode.next = !!l1 ? l1 : l2
  return prev.next
}

// @lc code=end

function mergeTwoLists_(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let lastNode = new ListNode()
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val > l2.val) {
    lastNode = l2
    lastNode.next = mergeTwoLists(l1, l2.next)
  } else {
    lastNode = l1
    lastNode.next = mergeTwoLists(l1.next, l2)
  }
  return lastNode
}

export default mergeTwoLists
