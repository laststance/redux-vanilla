beforeAll(() => {
  jest.spyOn(console, 'error')
  /* eslint-disable no-console */
  console.error.mockImplementation(() => {})
})

afterAll(() => {
  /* eslint-disable no-console */
  console.error.mockRestore()
})
