import removeDuplicates from '../code/26.删除有序数组中的重复项'


test('26.删除有序数组中的重复项-1',()=>{
  expect(removeDuplicates([1,1,2])).toBe(2)
})

test('26.删除有序数组中的重复项-2',()=>{
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5)
})


