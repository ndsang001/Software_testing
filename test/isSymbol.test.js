import isSymbol from '../src/isSymbol.js';

describe('isSymbol', () => {
    // Positive test cases
    describe('Positive test cases', () => {
        test('should return true for a Symbol value', () => {
            expect(isSymbol(Symbol('test'))).toBe(true);
        });

        test('should return true for Symbol.iterator', () => {
            expect(isSymbol(Symbol.iterator)).toBe(true);
        });
    });

    // Negative test cases
    describe('Negative test cases', () => {
        test('should return false for a string', () => {
            expect(isSymbol('abc')).toBe(false);
        });

        test('should return false for a number', () => {
            expect(isSymbol(42)).toBe(false);
        });

        test('should return false for null', () => {
            expect(isSymbol(null)).toBe(false);
        });

        test('should return false for undefined', () => {
            expect(isSymbol(undefined)).toBe(false);
        });

        test('should return false for an object', () => {
            expect(isSymbol({})).toBe(false);
        });

        test('should return false for an array', () => {
            expect(isSymbol([1, 2, 3])).toBe(false);
        });

        test('should return false for a boolean', () => {
            expect(isSymbol(true)).toBe(false);
            expect(isSymbol(false)).toBe(false);
        });
    });
});