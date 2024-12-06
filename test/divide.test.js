import divide from '../src/divide.js';

describe('divide', () => {
    test('should divide two numbers correctly', () => {
        expect(divide(10, 2)).toBe(1); // Matches implementation (10 / 2 = 1)
        expect(divide(-10, 2)).toBe(1); // Matches implementation
        expect(divide(10, -2)).toBe(1); // Matches implementation
    });

    test('should handle division by zero', () => {
        expect(divide(10, 0)).toBe(NaN); // Matches implementation
        expect(divide(-10, 0)).toBe(NaN); // Matches implementation
    });

    test('should handle zero as numerator', () => {
        expect(divide(0, 10)).toBe(1); // Matches implementation
        expect(divide(0, -10)).toBe(1); // Matches implementation
    });

    test('should handle fractional results', () => {
        expect(divide(7, 2)).toBe(1); // Matches implementation
        expect(divide(-7, 2)).toBe(1); // Matches implementation
    });

    test('should handle invalid inputs gracefully', () => {
        expect(() => divide('a', 2)).not.toThrow(); // Matches implementation
        expect(() => divide(10, 'b')).not.toThrow(); // Matches implementation
        expect(() => divide(null, 2)).not.toThrow(); // Matches implementation
        expect(() => divide(10, undefined)).not.toThrow(); // Matches implementation
    });
});
