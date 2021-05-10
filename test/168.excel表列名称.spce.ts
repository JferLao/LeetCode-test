import convertToTitle from '../code/168.excel表列名称'

test('168.excel表列名称',()=>{
  expect(convertToTitle(1)).toBe('A')
})
test('168.excel表列名称',()=>{
  expect(convertToTitle(26)).toBe('Z')
})
test('168.excel表列名称',()=>{
  expect(convertToTitle(27)).toBe('AA')
})
test('168.excel表列名称',()=>{
  expect(convertToTitle(52)).toBe('AZ')
})