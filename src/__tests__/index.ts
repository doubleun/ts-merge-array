import merge from '../main'

describe('Merge 2 collenctions', function () {
  it('merge in order', () => {
    expect(merge([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4])
  })

  it('merge in order 2', () => {
    expect(merge([1, 2, 3, 4, 5, 6], [7, 8, 9, 10])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])
  })
})
