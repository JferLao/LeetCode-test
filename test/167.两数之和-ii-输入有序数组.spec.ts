import twoSum from '../code/167.两数之和-ii-输入有序数组'

test('167.两数之和-ii-输入有序数组-1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
})

test('167.两数之和-ii-输入有序数组-2', () => {
  expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3])
})

test('167.两数之和-ii-输入有序数组-3', () => {
  expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2])
})
