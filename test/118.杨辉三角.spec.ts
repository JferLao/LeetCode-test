import generate from '../code/118.杨辉三角'

test('118.杨辉三角-1', () => {
  expect(generate(5)).toStrictEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
  ])
})
