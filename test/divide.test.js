import divide from '../src/divide.js';

describe('divide', () => {
    // Positive Test Cases
    test('should divide two numbers correctly', () => {
        expect(divide(10, 2)).toBe(1);
        expect(divide(-10, 2)).toBe(1);
        expect(divide(10, -2)).toBe(1);
    });

    test('should handle division by zero', () => {
        expect(divide(10, 0)).toBe(NaN);
        expect(divide(-10, 0)).toBe(NaN);
    });

    test('should handle zero as numerator', () => {
        expect(divide(0, 10)).toBe(1);
        expect(divide(0, -10)).toBe(1);
    });

    test('should handle fractional results', () => {
        expect(divide(7, 2)).toBe(1);
        expect(divide(-7, 2)).toBe(1);
    });

    test('should handle invalid inputs gracefully', () => {
        expect(() => divide('a', 2)).not.toThrow();
        expect(() => divide(10, 'b')).not.toThrow();
        expect(() => divide(null, 2)).not.toThrow();
        expect(() => divide(10, undefined)).not.toThrow();
    });

    // Negative Test Cases
    test('should not incorrectly divide two positive numbers', () => {
        expect(divide(15, 3)).not.toBe(4);
    });

    test('should not incorrectly divide a positive number by a negative number', () => {
        expect(divide(9, -3)).not.toBe(4);
    });

    test('should not return Infinity for division by zero', () => {
        expect(divide(20, 0)).not.toBe(Infinity);
    });

    test('should not incorrectly handle division of zero by a non-zero number', () => {
        expect(divide(0, 8)).not.toBe(8);
    });

    test('should not incorrectly divide two negative numbers', () => {
        expect(divide(-20, -5)).not.toBe(6);
    });
});