
import removeElement from '../code/27.移除元素'


test('27.删除元素-1',()=>{
  expect(removeElement([3,2,2,3],3)).toBe(2)
})

test('27.删除元素-2',()=>{
  expect(removeElement([0,1,2,2,3,0,4,2],2)).toBe(5)
})