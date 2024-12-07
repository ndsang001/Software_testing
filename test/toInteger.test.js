import toInteger from '../src/toInteger.js';

describe('toInteger', () => {
    // Original Test Cases
    test('should convert numbers correctly', () => {
        expect(toInteger(4.6)).toBe(4);
        expect(toInteger(-4.6)).toBe(-4);
        expect(toInteger(0)).toBe(0);
    });

    test('should handle special number values', () => {
        expect(toInteger(Infinity)).toBe(Number.MAX_VALUE);
        expect(toInteger(-Infinity)).toBe(-Number.MAX_VALUE);
        expect(toInteger(NaN)).toBe(0);
    });

    test('should convert strings and other inputs', () => {
        expect(toInteger('5.6')).toBe(5);
        expect(toInteger('-5.6')).toBe(-5);
        expect(toInteger(null)).toBe(0);
        expect(toInteger(undefined)).toBe(0);
    });

    // Additional Test Cases
    test('should convert a positive float to an integer', () => {
        expect(toInteger(3.2)).toBe(3);
    });

    test('should convert Number.MIN_VALUE to 0', () => {
        expect(toInteger(Number.MIN_VALUE)).toBe(0);
    });

    test('should convert a string representation of a float to an integer', () => {
        expect(toInteger('3.2')).toBe(3);
    });

    test('should convert a large positive float to an integer', () => {
        expect(toInteger(1.7976931348623157e+308)).toBe(Number.MAX_VALUE);
    });

    test('should convert a boolean to 0 or 1', () => {
        expect(toInteger(true)).toBe(1);
        expect(toInteger(false)).toBe(0);
    });

    test('should convert an object to 0', () => {
        expect(toInteger({})).toBe(0);
    });

    test('should convert an array to 0', () => {
        expect(toInteger([1, 2, 3])).toBe(0);
    });
});
