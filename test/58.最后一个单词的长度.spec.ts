import lengthOfLastWord from '../code/58.最后一个单词的长度'

test('58.最后一个单词的长度-1', () => {
  expect(lengthOfLastWord('Hello World')).toBe(5)
})

test('58.最后一个单词的长度-2', () => {
  expect(lengthOfLastWord(' ')).toBe(0)
})
