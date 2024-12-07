import isLength from '../src/isLength.js';

describe('isLength', () => {
    // Test valid lengths
    test('should return true for valid array-like lengths', () => {
        expect(isLength(0)).toBe(true);
        expect(isLength(5)).toBe(true);
        expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true);
    });

    // Test invalid lengths
    test('should return false for invalid lengths', () => {
        expect(isLength(-1)).toBe(false);
        expect(isLength(1.5)).toBe(false);
        expect(isLength(Infinity)).toBe(false);
        expect(isLength('5')).toBe(false);
    });

    // Test non-numeric inputs
    test('should return false for non-numeric inputs', () => {
        expect(isLength(null)).toBe(false);
        expect(isLength(undefined)).toBe(false);
        expect(isLength({})).toBe(false);
    });

    // Test valid array-like length
    test('should return true for a valid array-like length', () => {
        expect(isLength(3)).toBe(true);
    });

    // Test Number.MIN_VALUE
    test('should return false for Number.MIN_VALUE', () => {
        expect(isLength(Number.MIN_VALUE)).toBe(false);
    });

    // Test Infinity
    test('should return false for Infinity', () => {
        expect(isLength(Infinity)).toBe(false);
    });

    // Test strings
    test('should return false for a string', () => {
        expect(isLength('3')).toBe(false);
    });

    // Test negative numbers
    test('should return false for a negative number', () => {
        expect(isLength(-1)).toBe(false);
    });

    // Test floating-point numbers
    test('should return false for a floating-point number', () => {
        expect(isLength(3.14)).toBe(false);
    });

    // Test null
    test('should return false for null', () => {
        expect(isLength(null)).toBe(false);
    });

    // Test undefined
    test('should return false for undefined', () => {
        expect(isLength(undefined)).toBe(false);
    });

    // Test booleans
    test('should return false for a boolean', () => {
        expect(isLength(true)).toBe(false);
        expect(isLength(false)).toBe(false);
    });

    // Test objects
    test('should return false for an object', () => {
        expect(isLength({ length: 5 })).toBe(false);
    });

    // Test arrays
    test('should return false for an array', () => {
        expect(isLength([1, 2, 3])).toBe(false);
    });
});
