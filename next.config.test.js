const nextConfig = require('./next.config')

describe('Next Config', () => {
  test('should export an object', () => {
    expect(typeof nextConfig).toBe('object')
  })
})