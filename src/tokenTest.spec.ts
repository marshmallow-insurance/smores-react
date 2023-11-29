describe('Token expiry', () => {
  it('should fail after November 27th', () => {
    const currentDate = new Date()
    const failAfterDate = new Date(2024, 10, 27)

    expect(currentDate.getTime()).toBeLessThanOrEqual(failAfterDate.getTime())
  })
})
