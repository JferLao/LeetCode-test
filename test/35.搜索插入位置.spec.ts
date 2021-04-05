import searchInsert from '../code/35.搜索插入位置'

test('35.搜索插入位置-1',()=>{
  expect(searchInsert([1,3,5,6],5)).toBe(2)
})

test('35.搜索插入位置-2',()=>{
  expect(searchInsert([1,3,5,6],7)).toBe(4)
})

test('35.搜索插入位置-3',()=>{
  expect(searchInsert([1,3,5,6],2)).toBe(1)
})

test('35.搜索插入位置-3',()=>{
  expect(searchInsert([1,3,5,6],0)).toBe(0)
})