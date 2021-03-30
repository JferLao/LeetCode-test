import isPalindrome from '../code/9.回文数'

test('9.回文数1', () => {
  expect(isPalindrome(121)).toBe(true)
})

test('9.回文数2', () => {
  expect(isPalindrome(-121)).toBe(false)
})

test('9.回文数3', () => {
  expect(isPalindrome(10)).toBe(false)
})

test('9.回文数4', () => {
  expect(isPalindrome(-101)).toBe(false)
})
