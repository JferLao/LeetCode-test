import strStr from '../code/28.实现-str-str';

test('28.实现strStr-1',()=>{
  expect(strStr('hello','ll')).toBe(2)
})

test('28.实现strStr-2',()=>{
  expect(strStr('aaaaa','bba')).toBe(-1)
})

test('28.实现strStr-1',()=>{
  expect(strStr('heelo','')).toBe(0)
})