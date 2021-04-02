import isValid from '../code/20.有效的括号'

test('20.有效的括号-1', () => {
  expect(isValid('()')).toBeTruthy()
})

test('20.有效的括号-2', () => {
  expect(isValid('()[]{}')).toBeTruthy()
})

test('20.有效的括号-3', () => {
  expect(isValid('(]')).toBeFalsy()
})

test('20.有效的括号-4', () => {
  expect(isValid('([)]')).toBeFalsy()
})

test('20.有效的括号-5', () => {
  expect(isValid('{[]}')).toBeTruthy()
})
