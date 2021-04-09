import maxSubArray from '../code/53.最大子序和'


test('53.最大子序和-1',()=>{
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})

test('53.最大子序和-2',()=>{
  expect(maxSubArray([1])).toBe(1)
})

test('53.最大子序和-3',()=>{
  expect(maxSubArray([0])).toBe(0)
})

test('53.最大子序和-4',()=>{
  expect(maxSubArray([-1])).toBe(-1)
})

test('53.最大子序和-5',()=>{
  expect(maxSubArray([-100000])).toBe(-100000)
})