import isPalindrome from '../code/125.验证回文串'

test('125.验证回文串-1', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy()
})

test('125.验证回文串-2', () => {
  expect(isPalindrome('race a car')).toBeFalsy()
})
