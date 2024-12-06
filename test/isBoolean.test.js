import isBoolean from '../src/isBoolean.js';

describe('isBoolean', () => {
    test('should return true for boolean values', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
    });

    test('should return false for non-boolean values', () => {
        expect(isBoolean(0)).toBe(false);
        expect(isBoolean('')).toBe(false);
        expect(isBoolean(null)).toBe(false);
        expect(isBoolean(undefined)).toBe(false);
        expect(isBoolean([])).toBe(false);
        expect(isBoolean({})).toBe(false);
    });
});
