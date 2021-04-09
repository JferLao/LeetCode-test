import countAndSay from '../code/38.外观数列'

test('38.外观数列-1',()=>{
  expect(countAndSay(1)).toBe('1')
})

test('38.外观数列-2',()=>{
  expect(countAndSay(4)).toBe('1211')
})

test('38.外观数列-3',()=>{
  expect(countAndSay(5)).toBe('111221')
})
