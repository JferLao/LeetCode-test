import romanToInt from '../code/13.罗马数字转整数'

test('13.罗马数字转整数-1',()=>{
  expect(romanToInt("III")).toBe(3)
})

test('13.罗马数字转整数-1',()=>{
  expect(romanToInt("IV")).toBe(4)
})

test('13.罗马数字转整数-1',()=>{
  expect(romanToInt("IX")).toBe(9)
})

test('13.罗马数字转整数-1',()=>{
  expect(romanToInt("LVIII")).toBe(58)
})

test('13.罗马数字转整数-1',()=>{
  expect(romanToInt("MCMXCIV")).toBe(1994)
})