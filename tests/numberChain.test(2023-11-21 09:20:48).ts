
import createNumberChain from '../src/numberChain';

describe('createNumberChain', () => {
  it('should chain operations and return the correct result', () => {
    const result = createNumberChain(10).add(5).subtract(3).multiply(2).divide(4).result();
    expect(result).toBe(6);
  });

  it('should handle division by zero by not changing the current number', () => {
    const result = createNumberChain(10).divide(0).result();
    expect(result).toBe(10);
  });
});
