import isLength from '../src/isLength.js';

describe('isLength', () => {
    test('should return true for valid array-like lengths', () => {
        expect(isLength(0)).toBe(true);
        expect(isLength(5)).toBe(true);
        expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true);
    });

    test('should return false for invalid lengths', () => {
        expect(isLength(-1)).toBe(false);
        expect(isLength(1.5)).toBe(false);
        expect(isLength(Infinity)).toBe(false);
        expect(isLength('5')).toBe(false);
    });

    test('should return false for non-numeric inputs', () => {
        expect(isLength(null)).toBe(false);
        expect(isLength(undefined)).toBe(false);
        expect(isLength({})).toBe(false);
    });
});
