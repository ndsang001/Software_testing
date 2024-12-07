import isLength from '../src/isLength.js';

describe('isLength', () => {
    // Test valid lengths
    describe('Valid lengths', () => {
        // Positive test cases
        test('should return true for valid array-like lengths', () => {
            expect(isLength(0)).toBe(true); // Boundary case
            expect(isLength(5)).toBe(true); // Positive case
            expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true); // Boundary case
        });
    });

    // Test invalid lengths
    describe('Invalid lengths', () => {
        // Negative test cases
        test('should return false for invalid lengths', () => {
            expect(isLength(-1)).toBe(false); // Negative case
            expect(isLength(1.5)).toBe(false); // Negative case
            expect(isLength(Infinity)).toBe(false); // Edge case
            expect(isLength('5')).toBe(false); // Negative case
            expect(isLength(Number.MIN_VALUE)).toBe(false); // Edge case
            expect(isLength('3')).toBe(false); // Negative case
            expect(isLength(3.14)).toBe(false); // Negative case
        });
    });

    // Test non-numeric inputs
    describe('Non-numeric inputs', () => {
        // Negative test cases
        test('should return false for non-numeric inputs', () => {
            expect(isLength(null)).toBe(false); // Negative case
            expect(isLength(undefined)).toBe(false); // Negative case
            expect(isLength({})).toBe(false); // Negative case
            expect(isLength(true)).toBe(false); // Negative case
            expect(isLength(false)).toBe(false); // Negative case
            expect(isLength({ length: 5 })).toBe(false); // Negative case
            expect(isLength([1, 2, 3])).toBe(false); // Negative case
        });
    });
});