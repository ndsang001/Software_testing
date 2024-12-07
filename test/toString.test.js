// Import the 'toString' function
import toString from '../src/toString.js';

describe('toString.js', () => {
  it('should convert numbers to strings', () => {
    expect(toString(42)).toBe('42');
    expect(toString(0)).toBe('0');
    expect(toString(-42)).toBe('-42');
  });

  it('should convert booleans to strings', () => {
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });

  it('should handle null and undefined by converting to string', () => {
    expect(toString(null)).toBe('null');
    expect(toString(undefined)).toBe('undefined');
  });

  it('should convert arrays to strings', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString([])).toBe('');
  });

  it('should convert nested arrays to strings', () => {
    expect(toString([1, [2, [3]]])).toBe('1,2,3');
  });

  it('should convert objects to "[object Object]"', () => {
    expect(toString({ key: 'value' })).toBe('[object Object]');
    expect(toString({})).toBe('[object Object]');
  });

  it('should convert symbols to their string representation', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).toBe(symbol.toString());
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).toBe('-0');
  });

  it('should convert NaN to "NaN"', () => {
    expect(toString(NaN)).toBe('NaN');
  });

  it('should convert Infinity and -Infinity to strings', () => {
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString(-Infinity)).toBe('-Infinity');
  });

  it('should convert functions to their string representation', () => {
    const func = () => {};
    expect(toString(func)).toBe(func.toString());
  });

  it('should convert Date objects to their string representation', () => {
    const date = new Date('2024-12-06T00:00:00.000Z');
    expect(toString(date)).toBe(date.toString());
  });

  it('should handle deeply nested arrays correctly', () => {
    expect(toString([1, [2, [3, [4]]]])).toBe('1,2,3,4');
  });

  it('should handle arrays with null and undefined elements', () => {
    expect(toString([null, undefined])).toBe(',');
  });

  it('should handle array with mixed types', () => {
    expect(toString([1, 'a', null, undefined, true])).toBe('1,a,,,true');
  });

  it('should convert objects with custom toString methods', () => {
    const customObj = {
      toString() {
        return 'Custom Object';
      },
    };
    expect(toString(customObj)).toBe('Custom Object');
  });
});
