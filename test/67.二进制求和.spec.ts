import addBinary from '../code/67.二进制求和';


test('67.二进制求和-1',()=>{
  expect(addBinary("11","1")).toBe('100')
})

test('67.二进制求和-2',()=>{
  expect(addBinary("1010","1011")).toBe('10101')
})