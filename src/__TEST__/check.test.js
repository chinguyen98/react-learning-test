describe('true is truthy and false is falsy', () => {
  test('truthy', () => {
    expect(1 === 1).toBe(true);
  })
  test('falsy', () => {
    expect(1 === 2).toBe(false);
  })
})