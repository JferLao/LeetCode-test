import singleNumber from '../code/136.只出现一次的数字';

test('136.只出现过一次的数字-1',()=>{
  expect(singleNumber([2,2,1])).toBe(1)
})

test('136.只出现过一次的数字-2',()=>{
  expect(singleNumber([4,1,2,1,2])).toBe(4)
})