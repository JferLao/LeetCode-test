import merge from '../code/88.合并两个有序数组'

test('88.合并两个有序数组-1',()=>{
  expect(merge([1,2,3,0,0,0],3,[2,5,6],3)).toBeUndefined()
})

test('88.合并两个有序数组-2',()=>{
  expect(merge([1],1,[],0)).toBeUndefined()
})
