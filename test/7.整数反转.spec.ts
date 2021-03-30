import reverse from '../code/7.整数反转'



test('7.整数反转测试1',()=>{
  expect(reverse(123)).toBe(321)
})

test('7.整数反转测试2',()=>{
  expect(reverse(-123)).toBe(-321)
})

test('7.整数反转测试3',()=>{
  expect(reverse(120)).toBe(21)
})

test('7.整数反转测试4',()=>{
  expect(reverse(-120)).toBe(-21)
})

test('7.整数反转测试5',()=>{
  expect(reverse(0)).toBe(0)
})
test('7.整数反转测试6',()=>{
  expect(reverse(1534236469)).toBe(0)
})
test('7.整数反转测试7',()=>{
  expect(reverse(1563847412)).toBe(0)
})