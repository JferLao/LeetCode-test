/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
 
  let str = s
    .replace(
      /[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
      ''
    )
    .toLocaleLowerCase()
    let left = 0
    let right = str.length - 1
    while(left<right){
      if(str[left]!==str[right]){
        return false
      }else{
        left++
        right--
      }
    }
  return true
}
// @lc code=end

export default isPalindrome
